import React, { useState } from 'react';
import { Upload, PlusCircle, Save, FileUp } from 'lucide-react';

const CreateCourse = () => {
    // State for form fields (simplified for UI demo)
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        category: '',
        level: '',
        duration: '',
        enrollmentType: 'Open Enrollment',
        visibility: 'Public'
    });

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8 pb-20">
            
            {/* --- Page Header --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Create Course</h1>
                <p className="text-gray-500 mt-2">Design and publish your own maritime course</p>
            </div>

            {/* --- 1. Basic Information --- */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Basic Information</h2>
                <p className="text-sm text-gray-500 mb-6">Set up the fundamental details of your course</p>

                <div className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Course Title *</label>
                        <input 
                            type="text" 
                            placeholder="e.g., Advanced Marine Navigation" 
                            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] transition-all"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Course Description *</label>
                        <textarea 
                            rows="4"
                            placeholder="Provide a comprehensive overview of what students will learn..." 
                            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Dropdowns Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
                            <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                                <option value="">Select category</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Navigation">Navigation</option>
                                <option value="Safety">Safety</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Difficulty Level *</label>
                            <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                                <option value="">Select level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Duration (weeks) *</label>
                            <input 
                                type="number" 
                                placeholder="e.g., 8" 
                                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 2. Course Content --- */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Course Content</h2>
                <p className="text-sm text-gray-500 mb-6">Add modules and learning materials</p>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors mb-6">
                    <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                        <Upload className="w-8 h-8 text-[#0071B2]" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Upload Course Materials</h3>
                    <p className="text-sm text-gray-500 mb-6">Drag and drop files here or click to browse</p>
                    <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                        <FileUp className="w-4 h-4" />
                        Choose Files
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button className="w-full py-3 border border-gray-200 rounded-xl text-gray-600 font-bold hover:border-[#0071B2] hover:text-[#0071B2] hover:bg-[#E0F7FA] transition-all flex items-center justify-center gap-2">
                        <PlusCircle className="w-5 h-5" /> Add Module
                    </button>
                    <button className="w-full py-3 border border-gray-200 rounded-xl text-gray-600 font-bold hover:border-[#0071B2] hover:text-[#0071B2] hover:bg-[#E0F7FA] transition-all flex items-center justify-center gap-2">
                        <PlusCircle className="w-5 h-5" /> Add Quiz
                    </button>
                    <button className="w-full py-3 border border-gray-200 rounded-xl text-gray-600 font-bold hover:border-[#0071B2] hover:text-[#0071B2] hover:bg-[#E0F7FA] transition-all flex items-center justify-center gap-2">
                        <PlusCircle className="w-5 h-5" /> Add Assignment
                    </button>
                </div>
            </div>

            {/* --- 3. Course Settings --- */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Course Settings</h2>
                <p className="text-sm text-gray-500 mb-6">Configure enrollment and visibility options</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Enrollment Type</label>
                        <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                            <option>Open Enrollment</option>
                            <option>Approval Required</option>
                            <option>Invite Only</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Visibility</label>
                        <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                            <option>Public</option>
                            <option>Private</option>
                            <option>Internal</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* --- Footer Actions --- */}
            <div className="flex justify-end gap-4 pt-4">
                <button className="px-8 py-3 border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    Save as Draft
                </button>
                <button className="px-8 py-3 bg-[#0071B2] text-white rounded-xl font-bold hover:bg-[#005f96] transition-colors shadow-sm flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    Publish Course
                </button>
            </div>

        </div>
    );
};

export default CreateCourse;