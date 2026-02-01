import React from 'react';

const ModernTemplate = ({ data }) => {
    const { personalInfo, education, experience, skills, projects } = data;

    return (
        <div className="w-full h-full bg-white text-gray-800 font-sans p-8" id="resume-content">
            {/* Header */}
            <header className="border-b-2 border-gray-900 pb-6 mb-6 flex items-start gap-6">
                {personalInfo.photo && (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm flex-shrink-0">
                        <img src={personalInfo.photo} alt={personalInfo.fullName} className="w-full h-full object-cover" />
                    </div>
                )}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900">{personalInfo.fullName}</h1>
                    <h2 className="text-xl text-gray-600 mt-2 font-medium">{personalInfo.jobTitle}</h2>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                        {personalInfo.email && (
                            <div className="flex items-center">
                                <span>{personalInfo.email}</span>
                            </div>
                        )}
                        {personalInfo.phone && (
                            <div className="flex items-center">
                                <span>{personalInfo.phone}</span>
                            </div>
                        )}
                        {personalInfo.address && (
                            <div className="flex items-center">
                                <span>{personalInfo.address}</span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Profile */}
            {personalInfo.summary && (
                <section className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
                        <span className="text-blue-400">•</span> Profile
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        {personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {experience && experience.length > 0 && (
                <section className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                        <span className="text-blue-400">•</span> Experience
                    </h3>
                    <div className="space-y-8 border-l-2 border-gray-100 pl-6 ml-1 relative">
                        {experience.map(exp => (
                            <div key={exp.id} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-gray-200 rounded-full border-2 border-white"></div>

                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-lg text-gray-900">{exp.title}</h4>
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{exp.duration}</span>
                                </div>
                                <div className="text-sm font-bold text-gray-500 mb-2">{exp.company}</div>
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
                <section className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                        <span className="text-blue-400">•</span> Projects
                    </h3>
                    <div className="space-y-6 border-l-2 border-gray-100 pl-6 ml-1 relative">
                        {projects.map(project => (
                            <div key={project.id} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-gray-200 rounded-full border-2 border-white"></div>

                                <div className="flex justify-between items-baseline mb-1">
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-bold text-lg text-gray-900">{project.name}</h4>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
                                                {project.link.replace(/^https?:\/\//, '')}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {project.technologies && (
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.technologies.split(',').map((tech, i) => (
                                            <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-8">
                {/* Education */}
                <div className="col-span-8">
                    {education && education.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                                <span className="text-blue-400">•</span> Education
                            </h3>
                            <div className="space-y-4">
                                {education.map(edu => (
                                    <div key={edu.id}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                                            <span className="text-xs text-gray-400">{edu.year}</span>
                                        </div>
                                        <div className="text-sm text-gray-500">{edu.institution}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Skills */}
                <div className="col-span-4">
                    {skills && skills.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                                <span className="text-blue-400">•</span> Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModernTemplate;
