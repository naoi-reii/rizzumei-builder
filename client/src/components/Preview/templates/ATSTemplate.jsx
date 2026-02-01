import React from 'react';

const ATSTemplate = ({ data }) => {
    const { personalInfo, education, experience, skills, projects } = data;

    return (
        <div className="w-full h-full bg-white text-black font-sans p-10 text-sm leading-normal" id="resume-content">
            {/* Header: Centered, simple formatting */}
            <header className="text-center mb-6">
                <h1 className="text-2xl font-bold uppercase mb-2">{personalInfo.fullName}</h1>
                <div className="text-gray-900">
                    {personalInfo.address} | {personalInfo.phone} | {personalInfo.email}
                </div>
                <div className="text-gray-900 mt-1">{personalInfo.jobTitle}</div>
            </header>

            {/* Profile Summary */}
            {personalInfo.summary && (
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Professional Summary</h3>
                    <p className="text-gray-900">{personalInfo.summary}</p>
                </section>
            )}

            {/* Experience */}
            {experience && experience.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Work Experience</h3>
                    <div className="space-y-4">
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between font-bold text-gray-900">
                                    <div>{exp.company}</div>
                                    <div>{exp.duration}</div>
                                </div>
                                <div className="italic text-gray-800 mb-1">{exp.title}</div>
                                <p className="text-gray-900">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education && education.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Education</h3>
                    <div className="space-y-2">
                        {education.map((edu) => (
                            <div key={edu.id}>
                                <div className="flex justify-between font-bold text-gray-900">
                                    <div>{edu.institution}</div>
                                    <div>{edu.year}</div>
                                </div>
                                <div className="text-gray-900">{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Projects</h3>
                    <div className="space-y-3">
                        {projects.map((proj) => (
                            <div key={proj.id}>
                                <div className="font-bold text-gray-900">
                                    {proj.name} {proj.link && <span>- <a href={proj.link} className="text-blue-900 underline font-normal">{proj.link}</a></span>}
                                </div>
                                {proj.technologies && <div className="text-gray-800 italic text-xs mb-1">Tech: {proj.technologies}</div>}
                                <p className="text-gray-900">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skills && skills.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Technical Skills</h3>
                    <p className="text-gray-900">{skills.join(', ')}</p>
                </section>
            )}
        </div>
    );
};

export default ATSTemplate;
