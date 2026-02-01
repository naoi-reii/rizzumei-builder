import React from 'react';
import { useResume } from '../../contexts/ResumeContext';

const Projects = () => {
    const { resumeData, updateSection } = useResume();
    const { projects } = resumeData;

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newProjects = [...projects];
        newProjects[index] = { ...newProjects[index], [name]: value };
        updateSection('projects', newProjects);
    };

    const addProject = () => {
        const newProjects = [
            ...projects,
            {
                id: Date.now(),
                name: '',
                link: '',
                description: '',
                technologies: ''
            }
        ];
        updateSection('projects', newProjects);
    };

    const removeProject = (id) => {
        const newProjects = projects.filter(proj => proj.id !== id);
        updateSection('projects', newProjects);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 border-b pb-2">Projects</h2>

            {projects.map((proj, index) => (
                <div key={proj.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group">
                    <button
                        onClick={() => removeProject(proj.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Project Name</label>
                            <input
                                type="text"
                                name="name"
                                value={proj.name}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="Project Name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Link (Optional)</label>
                            <input
                                type="text"
                                name="link"
                                value={proj.link}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="https://"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Technologies Used</label>
                            <input
                                type="text"
                                name="technologies"
                                value={proj.technologies}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="React, Node.js, etc."
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Description</label>
                            <textarea
                                name="description"
                                value={proj.description}
                                onChange={(e) => handleChange(e, index)}
                                rows="3"
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none placeholder:text-gray-400"
                                placeholder="Brief description of the project..."
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={addProject}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 font-medium hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Add Project
            </button>
        </div>
    );
};

export default Projects;
