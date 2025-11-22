import React from 'react';
import { Target, Award, BarChart, CheckCircle, FileCheck, TrendingUp } from 'lucide-react';

// --- PALETTE (Consistent with previous files) ---
// Blue: #0071B2
// Cyan: #00C2CB
// Green: #00E099
// Pink: #FF0055
// Yellow: #FFD900

// --- MOCK DATA ---
const stats = [
    {
        title: "Average Score",
        value: "87%",
        trend: "+5%",
        icon: Target,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    },
    {
        title: "Courses Completed",
        value: "8",
        trend: "+2",
        icon: Award,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    },
    {
        title: "Total Assessments",
        value: "24",
        trend: "+4",
        icon: BarChart,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    }
];

const recentScores = [
    {
        id: 1,
        title: "Navigation Quiz - Final Assessment",
        course: "Navigation Protocols",
        date: "May 20, 2024",
        score: 95,
        total: 100,
        percentage: "95%",
        isPerfect: false
    },
    {
        id: 2,
        title: "Engineering Assignment - Module 8",
        course: "Marine Engineering",
        date: "May 18, 2024",
        score: 88,
        total: 100,
        percentage: "88%",
        isPerfect: false
    },
    {
        id: 3,
        title: "Maritime Law Quiz - Chapter 9",
        course: "Maritime Law",
        date: "May 15, 2024",
        score: 92,
        total: 100,
        percentage: "92%",
        isPerfect: false
    },
    {
        id: 4,
        title: "Safety Protocols Assessment",
        course: "Safety Training",
        date: "May 12, 2024",
        score: 100,
        total: 100,
        percentage: "100%",
        isPerfect: true
    }
];

const courseResults = [
    {
        id: 1,
        title: "Marine Engineering Fundamentals",
        details: "8 modules • 4 quizzes • 2 assignments",
        score: 92
    },
    {
        id: 2,
        title: "Navigation and Safety Protocols",
        details: "6 modules • 3 quizzes • 1 assignments",
        score: 88
    },
    {
        id: 3,
        title: "Maritime Law and Regulations",
        details: "9 modules • 5 quizzes • 3 assignments",
        score: 85
    },
    {
        id: 4,
        title: "Ship Maintenance and Repair",
        details: "10 modules • 5 quizzes • 2 assignments",
        score: 95
    },
    {
        id: 5,
        title: "Marine Communication Systems",
        details: "7 modules • 3 quizzes • 2 assignments",
        score: 82
    }
];

const completedAssignments = [
    {
        id: 1,
        title: "Environmental Impact Study",
        course: "Marine Environment",
        score: 88,
        total: 100,
        feedback: "Excellent analysis",
        date: "May 15, 2024"
    },
    {
        id: 2,
        title: "Communication Systems Design",
        course: "Maritime Technology",
        score: 75,
        total: 100,
        feedback: "Good work, minor improvements needed",
        date: "May 5, 2024"
    }
];

const Progress = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-10">
            
            {/* --- Header --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Results</h1>
                <p className="text-gray-500 mt-2">Track your academic performance and progress</p>
            </div>

            {/* --- Top Stats Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-500 font-medium">{stat.title}</span>
                            <div className={`p-2 rounded-xl ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                            <span className="text-sm font-bold text-[#00E099] flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Recent Scores Section --- */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recent Scores</h3>
                <p className="text-sm text-gray-500 mb-6">Your latest assessment results</p>
                
                <div className="space-y-4">
                    {recentScores.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm hover:shadow-md transition-all">
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                                <p className="text-sm text-gray-500 mt-1">{item.course}</p>
                                <p className="text-xs text-gray-400 mt-2">{item.date}</p>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <span className={`text-2xl font-bold ${item.isPerfect ? 'text-[#00E099]' : 'text-[#0071B2]'}`}>
                                        {item.score}
                                    </span>
                                    <span className="text-xs text-gray-400 block">/ {item.total}</span>
                                </div>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold border-4 
                                    ${item.isPerfect ? 'border-[#00E099] text-[#00E099] bg-[#00E099]/10' : 'border-[#0071B2] text-[#0071B2] bg-[#0071B2]/10'}`}
                                >
                                    {item.percentage}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Course Results Section --- */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Course Results</h3>
                <p className="text-sm text-gray-500 mb-6">Detailed breakdown of your performance by course</p>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {courseResults.map((course, index) => (
                        <div key={course.id} className={`p-6 ${index !== courseResults.length - 1 ? 'border-b border-gray-50' : ''}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3">
                                    <h4 className="text-lg font-bold text-gray-900">{course.title}</h4>
                                    <span className="px-2 py-0.5 bg-[#E0F7FA] text-[#0071B2] text-[10px] font-bold uppercase tracking-wider rounded">Completed</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-[#00E099]">{course.score}%</span>
                                    <span className="text-xs text-gray-400 block">Overall Score</span>
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-500 mb-4">{course.details}</p>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div 
                                    className="h-full rounded-full bg-[#0071B2]" 
                                    style={{ width: `${course.score}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Completed Assignments Section --- */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-5 h-5 text-[#00E099]" />
                    <h3 className="text-xl font-bold text-gray-900">Completed Assignments</h3>
                </div>

                <div className="space-y-4">
                    {completedAssignments.map((assign) => (
                        <div key={assign.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-start gap-5 flex-1">
                                <div className="p-3 bg-[#E0F7FA] rounded-xl">
                                    <FileCheck className="w-6 h-6 text-[#0071B2]" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">{assign.title}</h4>
                                            <p className="text-sm text-gray-500 font-medium mb-2">{assign.course}</p>
                                            <div className="flex items-baseline gap-1 mb-3">
                                                <span className="text-sm text-gray-500">Score:</span>
                                                <span className="text-lg font-bold text-[#00E099]">{assign.score}/{assign.total}</span>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 border border-gray-200 text-sm font-bold text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                                            View Submission
                                        </button>
                                    </div>
                                    
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-700 mb-2 flex items-start gap-2">
                                        <span className="font-bold text-gray-900 whitespace-nowrap">Feedback:</span>
                                        <span>{assign.feedback}</span>
                                    </div>
                                    
                                    <p className="text-xs text-gray-400 mt-2">Submitted on {assign.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Progress;