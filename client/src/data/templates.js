import { LayoutTemplate, Briefcase, GraduationCap, PenTool } from 'lucide-react';

export const templates = [
    {
        id: 'modern',
        name: 'Modern',
        description: 'Clean and professional, perfect for corporate roles.',
        icon: LayoutTemplate,
        color: 'bg-blue-50 text-blue-600',
        borderColor: 'border-blue-200'
    },
    {
        id: 'harvard',
        name: 'Harvard',
        description: 'Traditional and text-heavy, ideal for academics and law.',
        icon: GraduationCap,
        color: 'bg-red-50 text-red-700',
        borderColor: 'border-red-200'
    },
    {
        id: 'ats',
        name: 'ATS Friendly',
        description: 'Simple formatting optimized for applicant tracking systems.',
        icon: Briefcase,
        color: 'bg-gray-50 text-gray-700',
        borderColor: 'border-gray-200'
    },
    {
        id: 'creative',
        name: 'Creative',
        description: 'Bold colors and layout for creative industries.',
        icon: PenTool,
        color: 'bg-purple-50 text-purple-600',
        borderColor: 'border-purple-200'
    }
];
