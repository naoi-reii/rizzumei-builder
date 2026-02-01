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
                fullName: 'Alex Morgan',
                jobTitle: 'Senior Product Designer',
                email: 'alex.morgan@design.com',
                phone: '+1 (555) 123-4567',
                address: 'San Francisco, CA',
                summary: 'Creative and detail-oriented Product Designer with 6+ years of experience...',
            },
            education: [
                {
                    id: 1,
                    institution: 'University of Design, San Francisco',
                    degree: 'BFA in Interaction Design',
                    year: '2018'
                }
            ],
            experience: [
                {
                    id: 1,
                    company: 'TechFlow Inc.',
                    title: 'Senior Product Designer',
                    duration: 'Jan 2021 - Present',
                    description: 'Led the redesign of the core SaaS platform, improving user retention by 15%.'
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
