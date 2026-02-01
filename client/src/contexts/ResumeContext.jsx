import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
    return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
    // Initial State with Local Storage Check
    const [resumeData, setResumeData] = useState(() => {
        const savedData = localStorage.getItem('resumeData');
        return savedData ? JSON.parse(savedData) : {
            personalInfo: {
                fullName: 'Christian Ang',
                jobTitle: 'Student',
                email: 'angchristian95@gmail.com',
                phone: '09123456789',
                address: 'LAGRO, QC',
                summary: 'pogi',
            },
            education: [
                {
                    id: 1,
                    institution: 'Our Lady of Fatima University',
                    degree: 'BS in Information Technology',
                    year: '2030'
                }
            ],
            experience: [
                {
                    id: 1,
                    company: 'Google',
                    title: 'Janitor',
                    duration: 'Jan 2026 - Present',
                    description: 'Ako nag lilinis sa first floor'
                }
            ],
            skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping', 'HTML/CSS'],
            projects: []
        };
    });

    const [selectedTemplate, setSelectedTemplate] = useState(() => {
        return localStorage.getItem('selectedTemplate') || 'modern';
    });

    // Auto-save to Local Storage
    React.useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }, [resumeData]);

    React.useEffect(() => {
        localStorage.setItem('selectedTemplate', selectedTemplate);
    }, [selectedTemplate]);

    const updatePersonalInfo = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value }
        }));
    };

    // simplified update functions for now
    const updateSection = (section, data) => {
        setResumeData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    const value = {
        resumeData,
        updatePersonalInfo,
        updateSection,
        selectedTemplate,
        setSelectedTemplate
    };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
};
