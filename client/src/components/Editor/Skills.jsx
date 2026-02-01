import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';

const Skills = () => {
    const { resumeData, updateSection } = useResume();
    const { skills } = resumeData;
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim()) {
            updateSection('skills', [...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        updateSection('skills', skills.filter(skill => skill !== skillToRemove));
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 border-b pb-2">Skills</h2>

            <form onSubmit={handleAddSkill} className="flex gap-2">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                    placeholder="Add a skill (e.g. React, Python)"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                    Add
                </button>
            </form>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                        <button
                            onClick={() => removeSkill(skill)}
                            className="text-gray-400 hover:text-red-500 transition-colors focus:outline-none"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </span>
                ))}
            </div>

            {skills.length === 0 && (
                <p className="text-gray-500 text-sm italic">No skills added yet.</p>
            )}
        </div>
    );
};

export default Skills;
