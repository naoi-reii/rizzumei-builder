const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req, res) => {
    res.send('Resume Builder API is running');
});

// PDF Generation Route
app.post('/api/export/pdf', async (req, res) => {
    const { html } = req.body;
    if (!html) {
        return res.status(400).send('HTML content required');
    }

    try {
        // Attempt to find local Chrome on Windows to avoid large downloads
        let executablePath = undefined;
        const possiblePaths = [
            'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        ];

        for (const p of possiblePaths) {
            if (fs.existsSync(p)) {
                executablePath = p;
                console.log('Using local Chrome at:', p);
                break;
            }
        }

        const browser = await require('puppeteer').launch({
            headless: 'new',
            executablePath: executablePath, // Will use system chrome if found, otherwise default
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // Optimize PDF generation speed
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
                // We typically need styles and fonts, but maybe image optimization?
                // For now, let's allow everything to ensure consistent rendering
                req.continue();
            } else {
                req.continue();
            }
        });

        await page.setContent(html, { waitUntil: 'networkidle0' });

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' }
        });

        await browser.close();

        res.set('Content-Type', 'application/pdf');
        res.set('Content-Disposition', 'attachment; filename=resume.pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('PDF Generation Error:', error);
        res.status(500).send('Failed to generate PDF');
    }
});

// DOCX Generation Route
app.post('/api/export/docx', async (req, res) => {
    const { html } = req.body;
    if (!html) {
        return res.status(400).send('HTML content required');
    }

    try {
        const HTMLtoDOCX = require('html-to-docx');
        const fileBuffer = await HTMLtoDOCX(html, null, {
            table: { row: { cantSplit: true } },
            footer: true,
            pageNumber: true,
        });

        res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.set('Content-Disposition', 'attachment; filename=resume.docx');
        res.send(fileBuffer);
    } catch (error) {
        console.error('DOCX Generation Error:', error);
        res.status(500).send('Failed to generate DOCX');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
