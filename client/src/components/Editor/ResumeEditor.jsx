import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import { ChevronDown, ChevronUp, User, Briefcase, GraduationCap, Code, FolderGit2 } from 'lucide-react';

const ResumeEditor = () => {
    const [openSection, setOpenSection] = useState('personal');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        { id: 'personal', label: 'Personal Info', icon: User, component: PersonalInfo },
        { id: 'experience', label: 'Experience', icon: Briefcase, component: Experience },
        { id: 'education', label: 'Education', icon: GraduationCap, component: Education },
        { id: 'skills', label: 'Skills', icon: Code, component: Skills },
        { id: 'projects', label: 'Projects', icon: FolderGit2, component: Projects },
    ];

    return (
        <div className="p-6 space-y-4 pb-20">
            {sections.map(({ id, label, icon: Icon, component: Component }) => (
                <div key={id} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm transition-all duration-200">
                    <button
                        onClick={() => toggleSection(id)}
                        className={`w-full flex items-center justify-between p-4 text-left font-semibold transition-colors cursor-pointer ${openSection === id ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${openSection === id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span>{label}</span>
                        </div>
                        {openSection === id ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>

                    {openSection === id && (
                        <div className="p-4 border-t border-gray-100 bg-white animate-in slide-in-from-top-2 duration-200">
                            <Component />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ResumeEditor;
