import React from 'react';

const HarvardTemplate = ({ data }) => {
    const { personalInfo, education, experience, skills, projects } = data;

    return (
        <div className="w-full h-full bg-white text-black font-serif p-10" id="resume-content">
            {/* Header */}
            <header className="text-center border-b border-black pb-4 mb-4">
                <h1 className="text-2xl font-bold uppercase tracking-wide mb-2">{personalInfo.fullName}</h1>
                <div className="flex justify-center items-center gap-3 text-sm">
                    {personalInfo.address && <span>{personalInfo.address}</span>}
                    {personalInfo.phone && <span>| {personalInfo.phone}</span>}
                    {personalInfo.email && <span>| {personalInfo.email}</span>}
                </div>
            </header>

            {/* Education */}
            {education && education.length > 0 && (
                <section className="mb-4">
                    <h3 className="text-sm font-bold uppercase border-b border-black mb-2">Education</h3>
                    <div className="space-y-2">
                        {education.map(edu => (
                            <div key={edu.id} className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold">{edu.institution}</h4>
                                    <div className="italic text-sm">{edu.degree}</div>
                                </div>
                                <div className="text-sm font-medium">{edu.year}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Experience */}
            {experience && experience.length > 0 && (
                <section className="mb-4">
                    <h3 className="text-sm font-bold uppercase border-b border-black mb-2">Experience</h3>
                    <div className="space-y-4">
                        {experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold">{exp.company}</h4>
                                    <span className="text-sm italic">{exp.duration}</span>
                                </div>
                                <div className="text-sm italic mb-1">{exp.title}</div>
                                <p className="text-sm leading-snug">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
                <section className="mb-4">
                    <h3 className="text-sm font-bold uppercase border-b border-black mb-2">Projects</h3>
                    <div className="space-y-3">
                        {projects.map(proj => (
                            <div key={proj.id}>
                                <div className="flex justify-between items-baseline">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold">{proj.name}</h4>
                                        {proj.link && (
                                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-800 underline">
                                                Link
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {proj.technologies && (
                                    <div className="text-xs italic text-gray-700 mb-1">Technologies: {proj.technologies}</div>
                                )}
                                <p className="text-sm leading-snug">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skills && skills.length > 0 && (
                <section>
                    <h3 className="text-sm font-bold uppercase border-b border-black mb-2">Skills</h3>
                    <div className="text-sm">
                        <span className="font-bold">Technical Skills: </span>
                        {skills.join(', ')}
                    </div>
                </section>
            )}
        </div>
    );
};

export default HarvardTemplate;
