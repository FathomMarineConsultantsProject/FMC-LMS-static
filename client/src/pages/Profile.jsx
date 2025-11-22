import React from 'react';
import { 
    User, Mail, MapPin, Briefcase, Award, Calendar, 
    Clock, Shield, Anchor, CheckCircle, Edit2, Camera
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Green: #00E099
// Pink: #FF0055

const userProfile = {
    name: "Tracy Gao Wen",
    role: "Captain",
    department: "Navigation",
    location: "SS Voyager / Training Center Alpha",
    email: "tracy@maritime-lms.com",
    joined: "March 2022",
    avatar: "JD",
    stats: {
        hours: 47.5,
        courses: 12,
        certs: 3
    }
};

const skills = [
    { name: "Navigation Systems", level: "Expert", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Maritime Law", level: "Intermediate", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
    { name: "Safety Protocols", level: "Expert", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "Engine Maintenance", level: "Beginner", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { name: "Emergency Response", level: "Advanced", color: "bg-pink-50 text-pink-700 border-pink-200" },
];

const recentActivity = [
    { id: 1, action: "Completed Course", item: "Marine Safety Fundamentals", date: "2 days ago", icon: CheckCircle, color: "text-[#00E099]" },
    { id: 2, action: "Earned Certificate", item: "Advanced Navigation", date: "1 week ago", icon: Award, color: "text-[#FFD900]" },
    { id: 3, action: "Started Course", item: "Maritime Law Specialist", date: "2 weeks ago", icon: PlayCircle, color: "text-[#0071B2]" }, // Added PlayCircle import below
];

import { PlayCircle } from 'lucide-react'; // Importing missing icon

const Profile = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8 pb-20">
            
            {/* --- Header --- */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-gray-500 mt-2">Manage your personal information and view your journey</p>
                </div>
                <button className="px-6 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:text-[#0071B2] hover:border-[#0071B2] transition-all flex items-center gap-2">
                    <Edit2 className="w-4 h-4" /> Edit Profile
                </button>
            </div>

            {/* --- 1. Main Profile Card --- */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Banner Background */}
                <div className="h-32 bg-gradient-to-r from-[#0071B2] to-[#00C2CB]"></div>
                
                <div className="px-8 pb-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start -mt-12">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center text-4xl font-bold text-[#0071B2] bg-gray-50">
                                {userProfile.avatar}
                            </div>
                            <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md border border-gray-100 hover:text-[#0071B2] transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 pt-14 md:pt-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                        {userProfile.name}
                                        <span className="px-2.5 py-0.5 bg-[#E0F7FA] text-[#0071B2] text-xs font-bold uppercase tracking-wider rounded-md border border-[#0071B2]/20">
                                            Active
                                        </span>
                                    </h2>
                                    <p className="text-gray-500 font-medium mt-1">{userProfile.role} • {userProfile.department}</p>
                                    
                                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            {userProfile.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Mail className="w-4 h-4 text-gray-400" />
                                            {userProfile.email}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            Joined {userProfile.joined}
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Stats Row (Desktop) */}
                                <div className="flex gap-6 md:border-l border-gray-100 md:pl-6">
                                    <div className="text-center">
                                        <span className="block text-xl font-bold text-gray-900">{userProfile.stats.hours}</span>
                                        <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Hours</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-xl font-bold text-gray-900">{userProfile.stats.courses}</span>
                                        <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Courses</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-xl font-bold text-gray-900">{userProfile.stats.certs}</span>
                                        <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Certificates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Bottom Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* 2. Left Column: About & Skills */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Skills Section */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-[#E0F7FA] rounded-lg text-[#0071B2]">
                                <Anchor className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Skills & Competencies</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <div key={index} className={`px-4 py-2 rounded-xl border text-sm font-medium flex items-center gap-2 ${skill.color}`}>
                                    {skill.name}
                                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                                    <span className="text-xs opacity-80 uppercase tracking-wide">{skill.level}</span>
                                </div>
                            ))}
                            <button className="px-4 py-2 rounded-xl border border-dashed border-gray-300 text-gray-400 text-sm font-medium hover:border-[#0071B2] hover:text-[#0071B2] transition-colors flex items-center gap-2">
                                <PlusCircle className="w-4 h-4" /> Add Skill
                            </button>
                        </div>
                    </div>

                    {/* Certifications Preview */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#FFF0F5] rounded-lg text-[#FF0055]">
                                    <Award className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Certifications</h3>
                            </div>
                            <button className="text-sm font-bold text-[#0071B2] hover:underline">View All</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-[#00E099] transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-[#00E099]/10 flex items-center justify-center text-[#00E099]">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Marine Safety Fundamentals</h4>
                                    <p className="text-xs text-gray-500 mt-0.5">Issued May 2024</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-[#0071B2] transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-[#0071B2]/10 flex items-center justify-center text-[#0071B2]">
                                    <Anchor className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Ship Maintenance Pro</h4>
                                    <p className="text-xs text-gray-500 mt-0.5">Issued Apr 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Right Column: Activity Feed */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                <Activity className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                        </div>

                        <div className="relative pl-4 border-l-2 border-gray-100 space-y-8">
                            {recentActivity.map((item) => (
                                <div key={item.id} className="relative">
                                    {/* Dot on timeline */}
                                    <div className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-white shadow-sm ${item.color === 'text-[#00E099]' ? 'bg-[#00E099]' : item.color === 'text-[#FFD900]' ? 'bg-[#FFD900]' : 'bg-[#0071B2]'}`}></div>
                                    
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{item.date}</span>
                                        <p className="text-sm font-bold text-gray-900">{item.action}</p>
                                        <p className="text-sm text-gray-500">{item.item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button className="w-full mt-8 py-2.5 border border-gray-200 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors">
                            View Full History
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper imports
import { PlusCircle, Activity } from 'lucide-react';

export default Profile;