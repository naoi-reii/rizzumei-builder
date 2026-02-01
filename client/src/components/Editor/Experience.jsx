import React from 'react';
import { useResume } from '../../contexts/ResumeContext';

const Experience = () => {
    const { resumeData, updateSection } = useResume();
    const { experience } = resumeData;

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newExperience = [...experience];
        newExperience[index] = { ...newExperience[index], [name]: value };
        updateSection('experience', newExperience);
    };

    const addExperience = () => {
        const newExperience = [
            ...experience,
            {
                id: Date.now(),
                company: '',
                title: '',
                duration: '',
                description: ''
            }
        ];
        updateSection('experience', newExperience);
    };

    const removeExperience = (id) => {
        const newExperience = experience.filter(exp => exp.id !== id);
        updateSection('experience', newExperience);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 border-b pb-2">Experience</h2>

            {experience.map((exp, index) => (
                <div key={exp.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group">
                    <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={exp.company}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Job Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={exp.title}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="Job Title"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Duration</label>
                                <input
                                    type="text"
                                    name="duration"
                                    value={exp.duration}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="Jan 2020 - Present"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Description</label>
                            <textarea
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleChange(e, index)}
                                rows="3"
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none placeholder:text-gray-400"
                                placeholder="Describe your responsibilities and achievements..."
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={addExperience}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 font-medium hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Add Experience
            </button>
        </div >
    );
};

export default Experience;
