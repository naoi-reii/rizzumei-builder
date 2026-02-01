import React from 'react';
import { X, Check, LayoutTemplate, Briefcase, GraduationCap, PenTool } from 'lucide-react';

const templates = [
    {
        id: 'modern',
        name: 'Modern',
        description: 'Clean and professional, perfect for corporate roles.',
        icon: LayoutTemplate,
        color: 'bg-blue-50 text-blue-600',
        borderColor: 'border-blue-200'
    },
    {
        id: 'harvard',
        name: 'Harvard',
        description: 'Traditional and text-heavy, ideal for academics and law.',
        icon: GraduationCap,
        color: 'bg-red-50 text-red-700',
        borderColor: 'border-red-200'
    },
    {
        id: 'ats',
        name: 'ATS Friendly',
        description: 'Simple formatting optimized for applicant tracking systems.',
        icon: Briefcase,
        color: 'bg-gray-50 text-gray-700',
        borderColor: 'border-gray-200'
    },
    {
        id: 'creative',
        name: 'Creative',
        description: 'Bold colors and layout for creative industries.',
        icon: PenTool,
        color: 'bg-purple-50 text-purple-600',
        borderColor: 'border-purple-200'
    }
];

const TemplateSelectorModal = ({ isOpen, onClose, selectedTemplate, onSelect }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="px-5 py-4 md:px-8 md:py-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Choose a Template</h2>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Select a design that best fits your personal brand.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Grid */}
                <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-gray-50/50 max-h-[60vh] overflow-y-auto">
                    {templates.map((template) => {
                        const isSelected = selectedTemplate === template.id;
                        const Icon = template.icon;

                        return (
                            <button
                                key={template.id}
                                onClick={() => {
                                    onSelect(template.id);
                                    onClose();
                                }}
                                className={`group relative flex items-start text-left p-4 md:p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${isSelected
                                    ? 'border-blue-600 bg-blue-50/10 ring-1 ring-blue-600'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                            >
                                <div className={`p-3 md:p-4 rounded-lg mr-4 md:mr-5 ${template.color} ${template.borderColor} border`}>
                                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>

                                <div>
                                    <h3 className={`font-bold text-base md:text-lg mb-1 ${isSelected ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600 transition-colors'}`}>
                                        {template.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                        {template.description}
                                    </p>
                                </div>

                                {isSelected && (
                                    <div className="absolute top-4 right-4 text-blue-600 bg-white rounded-full p-1 shadow-sm">
                                        <Check className="w-3 h-3 md:w-4 md:h-4" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 md:px-8 md:py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelectorModal;
