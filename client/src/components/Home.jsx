import React, { useRef, useState } from 'react';
import ResumeEditor from './Editor/ResumeEditor';
import ResumePreview from './Preview/ResumePreview';
import Header from './Header';
import { useResume } from '../contexts/ResumeContext';
import { FileJson, Download } from 'lucide-react';

const Home = () => {
    const resumeRef = useRef();
    const { resumeData } = useResume();
    const [isExporting, setIsExporting] = useState(false);

    // --- Export Logic Componentized ---
    const handleExportPDF = async () => {
        setIsExporting(true);
        try {
            const content = resumeRef.current.innerHTML;
            const fullHtml = `
              <!DOCTYPE html>
              <html>
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <script src="https://cdn.tailwindcss.com"></script>
                  <style>
                      body { margin: 0; padding: 0; }
                      @page { margin: 0; size: A4; }
                      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                  </style>
              </head>
              <body>${content}</body>
              </html>
          `;

            const response = await fetch('/api/export/pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ html: fullHtml })
            });
            if (!response.ok) throw new Error('Export failed');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${resumeData.personalInfo.fullName.replace(/\s+/g, '_') || 'Resume'}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('PDF Export Error:', error);
            alert('Failed to export PDF');
        } finally {
            setIsExporting(false);
        }
    };

    const [activeTab, setActiveTab] = useState('editor');

    return (
        <div className="flex flex-col h-screen bg-[#F3F4F6] font-sans text-gray-900 overflow-hidden">
            {/* 1. Global Header */}
            <Header onExportPDF={handleExportPDF} />

            {/* Mobile Tab Switcher */}
            <div className="lg:hidden px-4 pt-4 pb-2">
                <div className="bg-white p-1 rounded-xl flex shadow-sm border border-gray-200">
                    <button
                        onClick={() => setActiveTab('editor')}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'editor' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Editor
                    </button>
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'preview' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Preview
                    </button>
                </div>
            </div>

            {/* 2. Main Workspace */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Left: Editor Panel */}
                <div className={`
                    w-full lg:w-[450px] xl:w-[500px] bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0 z-10
                    ${activeTab === 'editor' ? 'block' : 'hidden lg:block'}
                `}>
                    <ResumeEditor />

                    {/* Spacer for sticky footer on mobile */}
                    <div className="h-24 lg:hidden"></div>
                </div>

                {/* Right: Preview Panel */}
                <div className={`
                    flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8 flex justify-center items-start lg:relative
                    ${activeTab === 'preview' ? 'block' : 'hidden lg:flex'}
                `}>
                    <div className="w-full flex justify-center mt-4 lg:mt-0">
                        <ResumePreview ref={resumeRef} />
                    </div>

                    {/* Spacer for sticky footer on mobile */}
                    <div className="h-24 lg:hidden"></div>
                </div>

                {/* Mobile Sticky Footer */}
                <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <button
                        onClick={handleExportPDF}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-500/20 active:bg-blue-700"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </button>
                </div>

            </div>
        </div>
    );
};


export default Home;
