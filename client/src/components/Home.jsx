import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../contexts/ResumeContext';
import { templates } from '../data/templates';
import { FileText, Moon } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const { setSelectedTemplate } = useResume();

    const handleSelectTemplate = (templateId) => {
        setSelectedTemplate(templateId);
        navigate('/editor');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white border-b border-gray-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-600 rounded-lg">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">ResumeBuilder</span>
                </div>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Moon className="w-5 h-5" />
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
                
                {/* Hero Section */}
                <div className="text-center max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        Pick a template that <span className="text-blue-600">gets you hired.</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our templates are crafted by recruitment experts and optimized for ATS systems, helping you stand out from the crowd in minutes.
                    </p>
                </div>

                {/* Template Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4">
                    {templates.map((template, index) => {
                        const Icon = template.icon;
                        return (
                            <div 
                                key={template.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col animate-in fade-in slide-in-from-bottom-8"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Preview Area (Placeholder) */}
                                <div className={`h-64 ${template.color.split(' ')[0]} bg-opacity-20 flex items-center justify-center relative group`}>
                                    <div className={`p-6 rounded-2xl ${template.color} bg-white shadow-lg transform transition-transform duration-500 group-hover:scale-110`}>
                                        <Icon className="w-16 h-16" />
                                    </div>
                                    
                                    {/* Overlay for 'Popular' tag example - mostly for visual matching if needed, 
                                        added to the first one for demo */}
                                    {index === 0 && (
                                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                            POPULAR
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-2 rounded-lg ${template.color}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                                    </div>
                                    
                                    <p className="text-sm text-gray-500 mb-6 flex-1">
                                        {template.description}
                                    </p>

                                    <button
                                        onClick={() => handleSelectTemplate(template.id)}
                                        className="w-full py-2.5 px-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 active:scale-95"
                                    >
                                        Choose Template
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination (Visual Only as per request/image) */}
                <div className="mt-16 flex flex-col items-center">
                    <p className="text-sm text-gray-500 mb-4">Showing {templates.length} of {templates.length} expert-designed templates</p>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 text-gray-400" disabled>&lt;</button>
                        <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold shadow-blue-200 shadow-lg">1</button>
                        <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 text-gray-700">2</button>
                        <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 text-gray-700">3</button>
                        <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 text-gray-700">&gt;</button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full mt-20 border-t border-gray-200 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
                   <div className="flex items-center gap-2">
                        <div className="p-1 bg-blue-600 rounded">
                            <FileText className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-gray-900">ResumeBuilder</span>
                    </div>
                    <p>Design by Christian Ang</p>
                    
                </footer>

            </main>
        </div>
    );
};

export default Home;
