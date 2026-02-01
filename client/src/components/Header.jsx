import React, { useState } from 'react';
import { FileText, Download, FileJson, Globe, LayoutGrid } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import TemplateSelectorModal from './Modals/TemplateSelectorModal';

const Header = ({ onExportPDF, onExportDOCX }) => {
    const { selectedTemplate, setSelectedTemplate } = useResume();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="h-16 bg-white border-b border-gray-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-50">
                {/* Left: Logo & Title */}
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 bg-green-600 rounded-lg">
                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-base md:text-lg font-bold text-gray-900 leading-tight">Resume Builder</h1>
                    </div>
                </div>



                {/* Right: Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Mobile: Simple Grid Menu */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                        <LayoutGrid className="w-6 h-6" />
                    </button>

                    {/* Mobile: Download Icon Only */}
                    <button
                        onClick={onExportPDF}
                        className="lg:hidden p-2 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-500/20 active:bg-blue-700 cursor-pointer"
                    >
                        <Download className="w-5 h-5" />
                    </button>

                    {/* Desktop: Full Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span>Change Template ({selectedTemplate})</span>
                        </button>

                        <div className="h-8 w-px bg-gray-200 mx-2"></div>

                        <button
                            onClick={onExportPDF}
                            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all active:scale-95"
                        >
                            <Download className="w-4 h-4" />
                            <span>Download PDF</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Template Modal */}
            <TemplateSelectorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedTemplate={selectedTemplate}
                onSelect={setSelectedTemplate}
            />
        </>
    );
};

export default Header;
