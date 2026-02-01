import React from 'react';
import { useResume } from '../../contexts/ResumeContext';

const PersonalInfo = () => {
    const { resumeData, updatePersonalInfo } = useResume();
    const { personalInfo } = resumeData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updatePersonalInfo(name, value);
    };

    return (
        <div className="space-y-4 animate-in fade-in duration-500">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3 border-b pb-2">Personal Information</h2>

            <div className="grid grid-cols-1 gap-3">
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={personalInfo.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={personalInfo.jobTitle}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                        placeholder="Software Engineer"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={personalInfo.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={personalInfo.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                            placeholder="+1 234 567 890"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={personalInfo.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                        placeholder="San Francisco, CA"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Professional Summary</label>
                    <textarea
                        name="summary"
                        value={personalInfo.summary}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-gray-400"
                        placeholder="Brief summary of your career..."
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
