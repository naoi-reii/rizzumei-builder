import React, { forwardRef, useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import ModernTemplate from './templates/ModernTemplate';
import HarvardTemplate from './templates/HarvardTemplate';
import ATSTemplate from './templates/ATSTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import { Plus, Minus, ZoomIn } from 'lucide-react';

const ResumePreview = forwardRef((props, ref) => {
    const { resumeData, selectedTemplate } = useResume();
    const [zoom, setZoom] = useState(100);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Calculate scale to fit screen width
                // A4 width is ~794px (210mm). We leave some padding (e.g., 32px or 48px total for margins)
                const availableWidth = window.innerWidth - 32;
                const a4WidthPx = 794;
                const scale = Math.min(availableWidth / a4WidthPx, 1) * 100;
                setZoom(Math.floor(scale));
            } else {
                setZoom(100);
            }
        };

        // Set initial
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center relative group w-full">
            {/* The Resume Page */}
            <div className="transform origin-top transition-transform duration-200 my-4" style={{ transform: `scale(${zoom / 100})` }}>
                <div
                    ref={ref}
                    className="shadow-xl print:shadow-none bg-white w-[210mm] min-h-[297mm] overflow-hidden"
                >
                    {selectedTemplate === 'modern' && <ModernTemplate data={resumeData} />}
                    {selectedTemplate === 'harvard' && <HarvardTemplate data={resumeData} />}
                    {selectedTemplate === 'ats' && <ATSTemplate data={resumeData} />}
                    {selectedTemplate === 'creative' && <CreativeTemplate data={resumeData} />}
                    {!['modern', 'harvard', 'ats', 'creative'].includes(selectedTemplate) && <p className="p-10 text-center text-gray-500">Select a template</p>}
                </div>
            </div>

            {/* Floating Zoom Controls (Bottom Right) - Hidden on Mobile */}
            <div className="hidden md:flex fixed bottom-8 right-12 items-center gap-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 z-50 transition-opacity hover:opacity-100 opacity-80">
                <button onClick={() => setZoom(z => Math.max(25, z - 10))} className="p-1 hover:bg-gray-100 rounded">
                    <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="min-w-[3ch] text-sm font-semibold text-gray-700 text-center">{zoom}%</span>
                <button onClick={() => setZoom(z => Math.min(150, z + 10))} className="p-1 hover:bg-gray-100 rounded">
                    <Plus className="w-4 h-4 text-gray-600" />
                </button>
            </div>
        </div>
    );
});

export default ResumePreview;
