import React from 'react';
import { useResume } from '../../contexts/ResumeContext';

const Education = () => {
    const { resumeData, updateSection } = useResume();
    const { education } = resumeData;

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newEducation = [...education];
        newEducation[index] = { ...newEducation[index], [name]: value };
        updateSection('education', newEducation);
    };

    const addEducation = () => {
        const newEducation = [
            ...education,
            {
                id: Date.now(),
                institution: '',
                degree: '',
                year: ''
            }
        ];
        updateSection('education', newEducation);
    };

    const removeEducation = (id) => {
        const newEducation = education.filter(edu => edu.id !== id);
        updateSection('education', newEducation);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 border-b pb-2">Education</h2>

            {education.map((edu, index) => (
                <div key={edu.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group">
                    <button
                        onClick={() => removeEducation(edu.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Institution</label>
                            <input
                                type="text"
                                name="institution"
                                value={edu.institution}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="University Name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Degree</label>
                            <input
                                type="text"
                                name="degree"
                                value={edu.degree}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="Degree"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Year</label>
                            <input
                                type="text"
                                name="year"
                                value={edu.year}
                                onChange={(e) => handleChange(e, index)}
                                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="Graduation Year"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={addEducation}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 font-medium hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Add Education
            </button>
        </div>
    );
};

export default Education;
