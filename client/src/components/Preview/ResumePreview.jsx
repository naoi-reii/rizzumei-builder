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

    return (
        <div className="flex flex-col items-center relative group">

            {/* The Resume Page */}
            <div className="transform origin-top transition-transform duration-200" style={{ transform: `scale(${zoom / 100})` }}>
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

            {/* Floating Zoom Controls (Bottom Right of Preview Area) */}
            <div className="fixed bottom-8 right-12 flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 z-50 transition-opacity hover:opacity-100 opacity-80">
                <button onClick={() => setZoom(z => Math.max(50, z - 10))} className="p-1 hover:bg-gray-100 rounded">
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
