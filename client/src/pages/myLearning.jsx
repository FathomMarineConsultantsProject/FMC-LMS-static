import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Ship, Compass, Scale, PlayCircle, Clock, 
    Wrench, Radio, Waves, CheckCircle, Download 
} from 'lucide-react'; 

// --- DATA: IN PROGRESS ---
const learningData = [
    {
        id: 1,
        title: "Marine Engineering Fundamentals",
        author: "Capt. John Smith",
        completedModules: 6,
        totalModules: 8,
        percentage: 75,
        timeRemaining: "2h 30m",
        icon: Ship,
        iconBg: "bg-[#E0F7FA]", // Light Cyan
        iconColor: "text-[#0071B2]" // Blue
    },
    {
        id: 2,
        title: "Navigation and Safety Protocols",
        author: "Dr. Sarah Johnson",
        completedModules: 3,
        totalModules: 6,
        percentage: 45,
        timeRemaining: "4h 15m",
        icon: Compass,
        iconBg: "bg-[#FFFDE7]", // Light Yellow
        iconColor: "text-[#FFD900]" // Yellow
    },
    {
        id: 3,
        title: "Maritime Law and Regulations",
        author: "Prof. Michael Chen",
        completedModules: 9,
        totalModules: 10,
        percentage: 90,
        timeRemaining: "1h 00m",
        icon: Scale,
        iconBg: "bg-[#FFF0F5]", // Light Pink
        iconColor: "text-[#FF0055]" // Pink
    }
];

// --- DATA: COMPLETED (New) ---
const completedData = [
    {
        id: 101,
        title: "Ship Maintenance and Repair",
        author: "Eng. Robert Brown",
        score: "95%",
        date: "May 15, 2024",
        icon: Wrench,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500"
    },
    {
        id: 102,
        title: "Marine Communication Systems",
        author: "Lt. Emily Davis",
        score: "88%",
        date: "April 22, 2024",
        icon: Radio,
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-500"
    },
    {
        id: 103,
        title: "Environmental Marine Practices",
        author: "Dr. Lisa Wang",
        score: "92%",
        date: "March 10, 2024",
        icon: Waves,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500"
    }
];

const MyLearning = () => {
    // Default to 'Completed' to show you the new view immediately
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('In Progress');

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8">
            
            {/* --- Header Section --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">My Learning</h2>
                    <p className="text-gray-500 mt-1">Track your progress and continue where you left off</p>
                </div>

                {/* Tabs */}
                <div className="bg-gray-100 p-1.5 rounded-xl flex items-center gap-1 w-full md:w-auto">
                    {['In Progress', 'Completed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 
                            ${activeTab === tab 
                                ? 'bg-white text-[#0071B2] shadow-sm' 
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Content Section --- */}
            <div className="min-h-[400px]">
                
                {/* VIEW 1: IN PROGRESS */}
                {activeTab === 'In Progress' && (
                    <div className="space-y-6 animation-fade-in">
                        {learningData.map((course) => (
                            <div 
                                key={course.id} 
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-6 items-start lg:items-center"
                            >
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 ${course.iconBg}`}>
                                    <course.icon className={`w-10 h-10 ${course.iconColor}`} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                                        <span className="lg:hidden font-bold text-[#0071B2]">{course.percentage}%</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium mb-5">by {course.author}</p>
                                    <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mb-2">
                                        <span>{course.completedModules} of {course.totalModules} modules completed</span>
                                        <span className="hidden lg:block">{course.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4 overflow-hidden">
                                        <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${course.percentage}%`, backgroundColor: '#0071B2' }}></div>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 font-medium">
                                        <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
                                        <span>{course.timeRemaining} remaining</span>
                                    </div>
                                </div>
                                <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto mt-2 lg:mt-0">
                                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm shadow-blue-200"
                                    onClick={()=>navigate(`/courseId`)}>
                                        <PlayCircle className="w-5 h-5" />
                                        Continue
                                    </button>
                                    <button className="flex-1 lg:flex-none px-6 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* VIEW 2: COMPLETED*/}
                {activeTab === 'Completed' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animation-fade-in">
                        {completedData.map((course) => (
                            <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#00C2CB] transition-all duration-300 flex flex-col overflow-hidden group">
                                
                                {/* Top Area with Icon */}
                                <div className={`h-32 ${course.iconBg} flex items-center justify-center w-full relative`}>
                                    <course.icon className={`w-12 h-12 ${course.iconColor} opacity-80 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex-1 flex flex-col">
                                    
                                    {/* Header: Title & Badge */}
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">{course.title}</h3>
                                        <span className="flex items-center gap-1 bg-[#0071B2] text-white text-[10px] uppercase font-bold px-2 py-1 rounded ml-2 flex-shrink-0">
                                            <CheckCircle className="w-3 h-3" />
                                            Certified
                                        </span>
                                    </div>
                                    
                                    <p className="text-xs text-gray-500 font-medium mb-6">by {course.author}</p>

                                    {/* Scores & Dates */}
                                    <div className="space-y-2 mt-auto">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Score:</span>
                                            <span className="font-bold text-[#00E099]">{course.score}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs text-gray-400 pb-4 border-b border-gray-100">
                                            <span>Completed on {course.date}</span>
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all">
                                        <Download className="w-4 h-4" />
                                        Download Certificate
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyLearning;