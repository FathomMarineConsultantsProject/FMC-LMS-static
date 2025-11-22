import React, { useState } from 'react';
import { 
    FileText, Clock, HelpCircle, AlertCircle, CheckCircle, 
    ChevronRight, FileCheck, PlayCircle, Calendar 
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2 (Primary buttons, accents)
// Cyan: #00C2CB (Secondary accents)
// Pink: #FF0055 (Urgent/Due dates)
// Green: #00E099 (Success/Scores)
// Yellow: #FFD900 (Warnings)

// --- MOCK DATA ---

const pendingQuizzes = [
    {
        id: 1,
        title: "Navigation Safety Quiz",
        course: "Navigation Protocols",
        time: "30 mins",
        questions: "20 questions",
        attempts: "2 attempts left",
        due: "Tomorrow, 11:59 PM",
        isUrgent: true
    },
    {
        id: 2,
        title: "Maritime Law Assessment",
        course: "Maritime Law",
        time: "45 mins",
        questions: "30 questions",
        attempts: "1 attempts left",
        due: "In 3 days",
        isUrgent: true
    }
];

const pendingAssignments = [
    {
        id: 1,
        title: "Ship Maintenance Report",
        course: "Marine Engineering",
        type: "Report",
        maxScore: 100,
        due: "In 5 days",
        isUrgent: true
    },
    {
        id: 2,
        title: "Navigation Route Planning",
        course: "Navigation Protocols",
        type: "Practical",
        maxScore: 50,
        due: "In 1 week",
        isUrgent: true
    }
];

const completedQuizzes = [
    {
        id: 1,
        title: "Marine Safety Basics",
        course: "Safety Protocols",
        score: 95,
        total: 100,
        status: "Passed",
        date: "May 18, 2024"
    },
    {
        id: 2,
        title: "Engineering Fundamentals",
        course: "Marine Engineering",
        score: 82,
        total: 100,
        status: "Passed",
        date: "May 10, 2024"
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

const Assessment = () => {
    const [activeTab, setActiveTab] = useState('Pending');

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            
            {/* --- Page Header --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Quiz & Assignments</h1>
                <p className="text-gray-500 mt-2">Manage your assessments and track your performance</p>
            </div>

            {/* --- Tabs --- */}
            <div className="bg-gray-100 p-1.5 rounded-xl flex items-center gap-1 w-full md:w-96">
                {['Pending', 'Completed'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 
                        ${activeTab === tab 
                            ? 'bg-white text-[#0071B2] shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* --- PENDING VIEW --- */}
            {activeTab === 'Pending' && (
                <div className="space-y-10 animation-fade-in">
                    
                    {/* 1. Pending Quizzes Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-5 h-5 text-[#FF0055]" />
                            <h3 className="text-xl font-bold text-gray-900">Pending Quizzes</h3>
                        </div>

                        <div className="space-y-4">
                            {pendingQuizzes.map((quiz) => (
                                <div key={quiz.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#00C2CB] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-5">
                                        <div className="p-4 bg-[#FFF0F5] rounded-2xl flex-shrink-0">
                                            <FileText className="w-6 h-6 text-[#FF0055]" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">{quiz.title}</h4>
                                            <p className="text-sm text-gray-500 font-medium mb-3">{quiz.course}</p>
                                            
                                            {/* Meta Chips */}
                                            <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-600">
                                                <span className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" /> {quiz.time}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-1.5">
                                                    <HelpCircle className="w-3.5 h-3.5" /> {quiz.questions}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-200">
                                                    {quiz.attempts}
                                                </span>
                                            </div>

                                            {/* Due Date */}
                                            <div className="flex items-center gap-2 mt-4 text-[#FF0055] text-sm font-bold">
                                                <Clock className="w-4 h-4" />
                                                Due: {quiz.due}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full md:w-auto px-8 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center justify-center gap-2">
                                        <PlayCircle className="w-4 h-4" /> Start Quiz
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. Pending Assignments Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-5 h-5 text-[#0071B2]" />
                            <h3 className="text-xl font-bold text-gray-900">Pending Assignments</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pendingAssignments.map((assignment) => (
                                <div key={assignment.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-gray-900 line-clamp-1">{assignment.title}</h4>
                                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md border border-gray-200">
                                            {assignment.type}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium mb-6">{assignment.course}</p>

                                    <div className="flex justify-between items-center mb-4 mt-auto">
                                        <span className="text-sm text-gray-500">Max Score:</span>
                                        <span className="font-bold text-gray-900">{assignment.maxScore}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-6 text-[#FF0055] text-sm font-bold">
                                        <Clock className="w-4 h-4" />
                                        Due: {assignment.due}
                                    </div>

                                    <button className="w-full py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:text-[#0071B2] hover:border-[#0071B2] transition-all">
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            )}

            {/* --- COMPLETED VIEW --- */}
            {activeTab === 'Completed' && (
                <div className="space-y-10 animation-fade-in">
                    
                    {/* 1. Completed Quizzes */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-5 h-5 text-[#00E099]" />
                            <h3 className="text-xl font-bold text-gray-900">Completed Quizzes</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {completedQuizzes.map((quiz) => (
                                <div key={quiz.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-[#00E099] transition-all">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">{quiz.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium mb-6">{quiz.course}</p>
                                    
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm text-gray-500">Score:</span>
                                        <span className="text-xl font-bold text-[#00E099]">
                                            {quiz.score} <span className="text-sm text-gray-400 font-normal">/ {quiz.total}</span>
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pb-6 border-b border-gray-50 mb-6">
                                        <span className="text-sm text-gray-500">Status:</span>
                                        <span className="px-2.5 py-1 bg-[#00E099] text-white text-xs font-bold rounded-md">
                                            {quiz.status}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                                        <span>Completed on {quiz.date}</span>
                                    </div>

                                    <button className="w-full py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                        View Results
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. Completed Assignments */}
                    <section>
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
                                                <button className="hidden md:flex px-4 py-2 border border-gray-200 text-sm font-bold text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                                                    View Submission
                                                </button>
                                            </div>
                                            
                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-gray-600 mb-2">
                                                <span className="font-bold text-gray-800 mr-1">Feedback:</span>
                                                {assign.feedback}
                                            </div>
                                            
                                            <p className="text-xs text-gray-400 mt-2">Submitted on {assign.date}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Mobile Only Button */}
                                    <button className="md:hidden w-full py-3 border border-gray-200 text-sm font-bold text-gray-600 rounded-xl">
                                        View Submission
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            )}

        </div>
    );
};

export default Assessment;