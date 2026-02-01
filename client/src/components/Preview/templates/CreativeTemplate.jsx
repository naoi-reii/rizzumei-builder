import React from 'react';

const CreativeTemplate = ({ data }) => {
    const { personalInfo, education, experience, skills, projects } = data;

    return (
        <div className="w-full min-h-[297mm] bg-white text-gray-800 font-sans flex" id="resume-content">
            {/* Sidebar (Left) */}
            <div className="w-1/3 bg-gray-900 text-white p-8 flex flex-col h-full">
                <div className="mb-8">
                    {/* Profile Photo */}
                    {personalInfo.photo ? (
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700 overflow-hidden shadow-lg">
                            <img src={personalInfo.photo} alt={personalInfo.fullName} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 mx-auto flex items-center justify-center text-2xl font-bold border-4 border-gray-600">
                            {personalInfo.fullName.split(' ').map(n => n[0]).join('')}
                        </div>
                    )}
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 border-b border-gray-700 pb-1">Contact</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li>{personalInfo.phone}</li>
                        <li className="break-words">{personalInfo.email}</li>
                        <li>{personalInfo.address}</li>
                    </ul>
                </div>

                {/* Education in Sidebar */}
                {education && education.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-700 pb-1">Education</h3>
                        <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id}>
                                    <div className="font-bold text-white">{edu.institution}</div>
                                    <div className="text-xs text-gray-400">{edu.degree}</div>
                                    <div className="text-xs text-gray-500">{edu.year}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills in Sidebar */}
                {skills && skills.length > 0 && (
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-700 pb-1">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded border border-gray-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content (Right) */}
            <div className="w-2/3 p-10 bg-gray-50">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 uppercase leading-none mb-2 tracking-tighter">{personalInfo.fullName}</h1>
                    <h2 className="text-xl text-indigo-600 font-medium tracking-wide">{personalInfo.jobTitle}</h2>
                </header>

                {/* Profile */}
                {personalInfo.summary && (
                    <section className="mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-indigo-600"></span> Profile
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {personalInfo.summary}
                        </p>
                    </section>
                )}

                {/* Experience */}
                {experience && experience.length > 0 && (
                    <section className="mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-indigo-600"></span> Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-indigo-100 pl-6 ml-2">
                            {experience.map(exp => (
                                <div key={exp.id} className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm"></div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-lg text-gray-900">{exp.title}</h4>
                                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{exp.duration}</span>
                                    </div>
                                    <div className="text-sm font-medium text-gray-500 mb-2">{exp.company}</div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {projects && projects.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-indigo-600"></span> Projects
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {projects.map(proj => (
                                <div key={proj.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-gray-900">{proj.name}</h4>
                                        {proj.link && <a href={proj.link} className="text-xs text-indigo-500 hover:underline">View Project</a>}
                                    </div>
                                    {proj.technologies && <div className="text-xs text-gray-400 mb-2">{proj.technologies}</div>}
                                    <p className="text-sm text-gray-600">
                                        {proj.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default CreativeTemplate;
