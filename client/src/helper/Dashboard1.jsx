import React from 'react';
import { BookOpen, Clock, Target, CheckCircle, Award, ChevronRight } from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Green: #00E099
// Yellow: #FFD900
// Pink: #FF0055

const coursesData = [
    {
        id: 1,
        title: "Marine Engineering Fundamentals",
        currentModule: 5,
        totalModules: 8,
        timeLeft: "2h 30m",
        percentage: 75
    },
    {
        id: 2,
        title: "Navigation and Safety Protocols",
        currentModule: 3,
        totalModules: 6,
        timeLeft: "4h 15m",
        percentage: 45
    },
    {
        id: 3,
        title: "Maritime Law and Regulations",
        currentModule: 9,
        totalModules: 10,
        timeLeft: "1h 00m",
        percentage: 90
    }
];

const deadlinesData = [
    {
        id: 1,
        title: "Navigation Quiz",
        course: "Navigation Protocols",
        due: "Tomorrow",
        badgeColor: "bg-[#FF0055]/10 text-[#FF0055]" // Pink for urgent
    },
    {
        id: 2,
        title: "Engineering Assignment",
        course: "Marine Engineering",
        due: "In 3 days",
        badgeColor: "bg-[#FFD900]/20 text-[#B29700]" // Yellow for medium
    },
    {
        id: 3,
        title: "Final Assessment",
        course: "Maritime Law",
        due: "In 5 days",
        badgeColor: "bg-[#00C2CB]/10 text-[#008C93]" // Cyan for safe
    }
];

const achievementsData = [
    {
        id: 1,
        title: "Quick Learner",
        description: "Completed 3 courses in a month",
        date: "2 days ago",
        iconBg: "bg-[#00E099]/20", // Mint Green
        iconColor: "text-[#00B37A]"
    },
    {
        id: 2,
        title: "Perfect Score",
        description: "Achieved 100% on Maritime Safety quiz",
        date: "5 days ago",
        iconBg: "bg-[#FFD900]/20", // Yellow
        iconColor: "text-[#D6B600]"
    }
];

const Dashboard1 = () => {
    return (
        <div className="p-6 space-y-8 max-w-9xl mx-auto">
            
            {/* --- TOP SECTION (Grid Layout) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* 1. LEFT COLUMN: Ongoing Courses (Takes up 2 columns) */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#E0F7FA] rounded-2xl">
                                <BookOpen className="w-6 h-6 text-[#0071B2]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Ongoing Courses</h3>
                                <p className="text-sm text-gray-500 font-medium">Continue your learning path</p>
                            </div>
                        </div>
                    </div>

                    {/* List */}
                    <div className="space-y-5">
                        {coursesData.map((course) => (
                            <div key={course.id} className="group p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:border-[#00C2CB] transition-all duration-300">
                                {/* Title & Percentage */}
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-bold text-gray-900 text-lg">{course.title}</h4>
                                    <span className="px-3 py-1 rounded-full bg-[#0071B2] text-white text-xs font-bold shadow-sm">
                                        {course.percentage}%
                                    </span>
                                </div>
                                
                                {/* Meta Data */}
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 font-medium">
                                    <span className="bg-white px-2 py-1 rounded-md border border-gray-200 text-xs">
                                        Mod {course.currentModule}/{course.totalModules}
                                    </span>
                                    <span className="text-gray-300">•</span>
                                    <div className="flex items-center text-[#FF0055]"> {/* Pink for Time */}
                                        <Clock className="w-4 h-4 mr-1.5" />
                                        <span>{course.timeLeft} left</span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,194,203,0.5)]"
                                        style={{ 
                                            width: `${course.percentage}%`,
                                            background: `linear-gradient(90deg, #0071B2 0%, #00C2CB 100%)` // Blue to Cyan Gradient
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Footer Button */}
                    <div className="mt-8 pt-4 border-t border-gray-100">
                        <button className="w-full flex items-center justify-center py-3 text-[#0071B2] font-bold hover:bg-[#E0F7FA] rounded-xl transition-colors">
                            View All Courses <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>

                {/* 2. RIGHT COLUMN: Upcoming Deadlines (Takes up 1 column) */}
                <div className="lg:col-span-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#FFF0F5] rounded-2xl"> {/* Light Pink Bg */}
                            <Target className="w-6 h-6 text-[#FF0055]" />   {/* Pink Icon */}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Deadlines</h3>
                            <p className="text-xs text-gray-500 font-medium">Stay on track</p>
                        </div>
                    </div>

                    {/* List */}
                    <div className="space-y-4 flex-1">
                        {deadlinesData.map((item) => (
                            <div key={item.id} className="flex flex-col p-4 rounded-2xl border border-gray-100 hover:border-[#FF0055] transition-colors bg-white group">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="p-2 bg-gray-50 rounded-full group-hover:bg-[#FF0055] group-hover:text-white transition-colors text-gray-400">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                                        {item.due}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1 font-medium">{item.course}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- BOTTOM SECTION: Recent Achievements --- */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#FFFDE7] rounded-2xl"> {/* Light Yellow Bg */}
                        <Award className="w-6 h-6 text-[#FFD900]" /> {/* Yellow Icon */}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Recent Achievements</h3>
                        <p className="text-sm text-gray-500 font-medium">Celebrate your learning milestones</p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievementsData.map((achievement) => (
                        <div key={achievement.id} className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-all bg-gradient-to-r from-white to-gray-50">
                            <div className={`p-4 rounded-full ${achievement.iconBg} ${achievement.iconColor} shadow-sm`}>
                                <Award className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                                <span className="text-xs text-gray-400 mt-2 block font-medium uppercase tracking-wide">{achievement.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Dashboard1;