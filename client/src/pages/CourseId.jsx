import React, { useState } from 'react';
import { 
    Play, Lock, CheckCircle, Clock, Star, Share2, 
    MessageCircle, FileText, ChevronDown, ChevronUp, User,
    Download, Layout, Monitor, Shield, ThumbsUp, Award
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Pink: #FF0055

// --- MOCK DATA ---
const courseData = {
    title: "Maritime Safety Familiarisation",
    category: "Safety Training",
    rating: 4.8,
    reviewsCount: 126,
    lessons: 12,
    duration: "4h 30min",
    author: {
        name: "Capt. Tracy Gao Wen",
        role: "Head Manning and Training",
        rating: 4.9,
        bio: "Capt. Tracy Gao Wen has over 20 years of experience in maritime safety and has led safety training for major shipping lines globally."
    },
    // Updated Sections with Video Links
    sections: [
        {
            id: 1,
            title: "01: Introduction to Maritime Safety",
            duration: "22min",
            isOpen: true,
            lessons: [
                { 
                    id: 101,
                    title: "KOTA Eagle Walkthrough", 
                    time: "2 min", 
                    isCompleted: true, 
                    isLocked: false,
                    videoUrl: "https://drive.google.com/file/d/1TQEMeQOgbhoYDs0fNSqxNMgYzM3GfkCi/preview" 
                },
                { 
                    id: 102,
                    title: "ECO Mastro Walk Through", 
                    time: "5 min", 
                    isCompleted: true, 
                    isLocked: false,
                    videoUrl: "https://drive.google.com/file/d/17CIZpqgbIRQA7Qg1k4_A36ETLMHhhO6v/preview" 
                },
                { 
                    id: 103,
                    title: "Main Switch-Board Training", 
                    time: "12 min", 
                    isCompleted: false, 
                    isLocked: false,
                    videoUrl: "https://drive.google.com/file/d/1xB-z4GInNh-ztAH5QutCNi8j-bnzOD7l/preview" 
                }, 
                { title: "Personal Protective Equipment", time: "3 min", isCompleted: false, isLocked: true }
            ]
        },
        {
            id: 2,
            title: "02: Emergency Procedures",
            duration: "1h 20min",
            isOpen: false,
            lessons: [
                { title: "Firefighting Basics", time: "15 min", isLocked: true },
                { title: "Abandon Ship Drills", time: "25 min", isLocked: true },
                { title: "Man Overboard Manoeuvres", time: "20 min", isLocked: true }
            ]
        },
        {
            id: 3,
            title: "03: Advanced Security",
            duration: "36min",
            isOpen: false,
            lessons: [
                { title: "ISPS Code Implementation", time: "18 min", isLocked: true },
                { title: "Cybersecurity Awareness", time: "18 min", isLocked: true }
            ]
        }
    ]
};

const reviews = [
    {
        id: 1,
        user: "Sarah Jenkins",
        role: "Third Officer",
        rating: 5,
        date: "2 days ago",
        comment: "Excellent breakdown of the SOLAS regulations. The practical examples really helped clarify the complex legal requirements.",
        avatarBg: "bg-purple-100 text-purple-600"
    },
    {
        id: 2,
        user: "Mike Ross",
        role: "Cadet",
        rating: 4,
        date: "1 week ago",
        comment: "Great content, but I wish there were more interactive quizzes in the first module. The instructor is very clear though.",
        avatarBg: "bg-blue-100 text-blue-600"
    },
    {
        id: 3,
        user: "Elena Rodriguez",
        role: "Safety Manager",
        rating: 5,
        date: "2 weeks ago",
        comment: "A must-watch for any safety officer. The section on risk assessment was particularly insightful.",
        avatarBg: "bg-green-100 text-green-600"
    }
];

const Course = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [expandedSections, setExpandedSections] = useState({ 1: true });
    // State to track the currently playing video
    const [currentVideo, setCurrentVideo] = useState(courseData.sections[0].lessons[0].videoUrl);
    const [currentLessonTitle, setCurrentLessonTitle] = useState(courseData.sections[0].lessons[0].title);

    const toggleSection = (id) => {
        setExpandedSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleLessonSelect = (lesson) => {
        if (!lesson.isLocked && lesson.videoUrl) {
            setCurrentVideo(lesson.videoUrl);
            setCurrentLessonTitle(lesson.title);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 pb-20">
            
            {/* --- Header --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 bg-[#E0F7FA] text-[#0071B2] text-xs font-bold uppercase tracking-wider rounded-md border border-[#0071B2]/20">
                            {courseData.category}
                        </span>
                        <div className="flex items-center text-[#FFD900] text-sm font-bold">
                            <Star className="w-4 h-4 fill-current mr-1" />
                            {courseData.rating} <span className="text-gray-400 font-normal ml-1">({courseData.reviewsCount} reviews)</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">{courseData.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                        <span className="flex items-center gap-1.5"><Play className="w-4 h-4" /> {courseData.lessons} lessons</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {courseData.duration}</span>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-5 py-2.5 text-[#0071B2] font-bold border border-[#0071B2]/20 hover:bg-[#E0F7FA] rounded-xl transition-colors flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button className="flex-1 md:flex-none px-8 py-2.5 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm shadow-blue-200">
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* --- Main Layout --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* LEFT COLUMN: Video & Content (2/3) */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Video Player Container */}
                    <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
                        {/* Display current lesson title overlay */}
                        <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium border border-white/10">
                            Now Playing: {currentLessonTitle}
                        </div>
                        
                        <iframe 
                            src={currentVideo}
                            width="100%" 
                            height="100%" 
                            allow="autoplay; fullscreen"
                            className="border-0"
                            title="Course Video"
                        ></iframe>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="border-b border-gray-100">
                        <div className="flex gap-8 overflow-x-auto">
                            {['Overview', 'Author', 'Resources', 'Reviews'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-sm font-bold border-b-2 transition-all px-2 whitespace-nowrap
                                    ${activeTab === tab 
                                        ? 'border-[#0071B2] text-[#0071B2]' 
                                        : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[300px]">
                        {activeTab === 'Overview' && (
                            <div className="space-y-8 animate-in fade-in duration-300">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">About Course</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        This training program is designed for modern seafarers working on LNG-powered container vessels 
                                        and focuses on operational competence, regulatory compliance, and real-world safety practices 
                                        based on IMO, STCW, SOLAS, IGF Code, IGC Code, SGMF guidelines, and RightShip standards. 
                                        It covers high-risk operations including pilot boarding, enclosed-space entry, and 
                                        LNG/Methanol bunkering. The course strengthens safety culture, improves critical 
                                        decision-making, and ensures compliance with international requirements for alternative-fuel ships.

                                        <br /><br />
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">What You'll Learn (Highlights)</h3>
                                        </div>

                                        <strong>Regulations & Safety Frameworks</strong><br />
                                        • Understand IMO, STCW, and SOLAS requirements for LNG-fuelled vessels<br />
                                        • Apply IGF Code (Part A & B) and IGC Code provisions to ship operations<br />
                                        • Interpret SGMF LNG Bunkering Guidelines and industry best practices<br />
                                        • Align onboard safety practices with RightShip inspection criteria<br /><br />

                                        <strong>LNG-Powered Vessel Familiarization</strong><br />
                                        • Gas-fuelled ship design, fuel storage and containment systems<br />
                                        • FGSS basics including BOG handling and pressure control<br />
                                        • Dual-fuel engine operations, purging, inerting and fuel change-over sequences<br /><br />

                                        <strong>Pilot Boarding Operations</strong><br />
                                        • SOLAS-compliant pilot ladder rigging and securing<br />
                                        • Safe transfer procedures for both day and night operations<br />
                                        • Risk assessment, communication and emergency recovery steps<br />
                                        • Human-element focus: situational awareness & decision-making<br /><br />

                                        <strong>Enclosed Space Entry Procedures</strong><br />
                                        • Understand SOLAS & IMO Resolution A.1050(27) requirements<br />
                                        • Gas detection, ventilation & atmospheric testing techniques<br />
                                        • PPE rules, standby duties & rescue plan activation<br />
                                        • Hazard identification & hierarchy of control measures<br /><br />

                                        <strong>LNG / Methanol Bunkering Operations</strong><br />
                                        • Pre-bunkering documentation, permits & safety zone establishment<br />
                                        • STS/TTS bunkering sequence aligned with SGMF best practices<br />
                                        • ESD logic, QCDC operation & hose connection management<br />
                                        • Emergency response to gas leaks, spills & cold-burn risks<br /><br />

                                        <strong>Emergency Response, Drills & Risk Management</strong><br />
                                        • Conduct IGF-aligned drills (fire, gas leak, blackout)<br />
                                        • Perform structured risk assessments for hazardous areas<br />
                                        • Crisis communication across deck, bridge & engine room<br />
                                        • Integrate ISM safety management principles into daily operations
                                    </p>
                                </div>
                                
                                
                            </div>
                        )}

                        {activeTab === 'Author' && (
                            <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-gray-100 animate-in fade-in duration-300">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 flex-shrink-0 border-2 border-white shadow-sm">
                                    <User className="w-10 h-10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="text-xl font-bold text-gray-900">{courseData.author.name}</h4>
                                        <span className="px-2 py-0.5 bg-blue-50 text-[#0071B2] text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-100">Instructor</span>
                                    </div>
                                    <p className="text-sm text-[#0071B2] font-medium mb-4">{courseData.author.role}</p>
                                    <p className="text-gray-600 leading-relaxed text-sm">{courseData.author.bio}</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Resources' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Downloadable Materials</h3>
                                {[
                                    "Safety Checklist Template.pdf", 
                                    "SOLAS Summary Guide.pdf", 
                                    "Emergency Drill Logbook.xlsx"
                                ].map((file, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#E0F7FA] rounded-lg text-[#0071B2]">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#0071B2] transition-colors">{file}</span>
                                        </div>
                                        <button className="p-2 text-gray-400 hover:text-[#0071B2] hover:bg-white rounded-lg transition-colors">
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'Reviews' && (
                            <div className="space-y-6 animate-in fade-in duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">Student Reviews</h3>
                                    <span className="text-sm font-bold text-[#0071B2]">View all {courseData.reviewsCount}</span>
                                </div>
                                
                                {reviews.map((review) => (
                                    <div key={review.id} className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-sm transition-shadow">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${review.avatarBg}`}>
                                                    {review.user.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900">{review.user}</h4>
                                                    <p className="text-xs text-gray-500">{review.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-[#FFD900] text-[#FFD900]' : 'fill-gray-200 text-gray-200'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                                        <div className="mt-3 flex items-center gap-4">
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                            <button className="text-xs font-medium text-gray-400 hover:text-[#0071B2] flex items-center gap-1">
                                                <ThumbsUp className="w-3 h-3" /> Helpful
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN: Syllabus (1/3) */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden sticky top-8">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900 text-lg">Course Content</h3>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">3 Sections</span>
                        </div>
                        
                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto custom-scrollbar">
                            {courseData.sections.map((section) => (
                                <div key={section.id} className="group bg-white">
                                    {/* Section Header */}
                                    <button 
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-all text-left"
                                    >
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0071B2] transition-colors mb-1">{section.title}</h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                                <span>{section.lessons.length} lessons</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span>{section.duration}</span>
                                            </div>
                                        </div>
                                        <div className={`p-1 rounded-md transition-colors ${expandedSections[section.id] ? 'bg-blue-50 text-[#0071B2]' : 'text-gray-400'}`}>
                                            {expandedSections[section.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    {/* Lessons List */}
                                    {expandedSections[section.id] && (
                                        <div className="bg-gray-50/30 pb-2 animate-in slide-in-from-top-2 duration-200">
                                            {section.lessons.map((lesson, idx) => (
                                                <div 
                                                    key={idx} 
                                                    onClick={() => handleLessonSelect(lesson)}
                                                    className={`flex items-start justify-between px-5 py-3.5 text-sm border-l-[3px] transition-all
                                                    ${lesson.title === currentLessonTitle 
                                                        ? 'border-[#0071B2] bg-white shadow-sm' // Active Lesson Style
                                                        : lesson.isCompleted 
                                                            ? 'border-[#00E099] bg-white cursor-pointer hover:bg-gray-50' 
                                                            : lesson.isLocked 
                                                                ? 'border-transparent opacity-60 cursor-not-allowed' 
                                                                : 'border-transparent hover:border-gray-300 cursor-pointer hover:bg-white'}`}
                                                >
                                                    
                                                    <div className="flex items-start gap-3.5">
                                                        <div className="mt-0.5">
                                                            {lesson.title === currentLessonTitle ? (
                                                                <div className="w-4 h-4 bg-[#0071B2] rounded-full flex items-center justify-center shadow-sm shadow-blue-200 animate-pulse">
                                                                    <Play className="w-2 h-2 text-white fill-current ml-0.5" />
                                                                </div>
                                                            ) : lesson.isCompleted ? (
                                                                <CheckCircle className="w-4 h-4 text-[#00E099]" /> 
                                                            ) : lesson.isLocked ? (
                                                                <Lock className="w-4 h-4 text-gray-400" />
                                                            ) : (
                                                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <span className={`font-medium block mb-0.5 ${lesson.isLocked ? 'text-gray-500' : lesson.title === currentLessonTitle ? 'text-[#0071B2]' : 'text-gray-900'}`}>
                                                                {lesson.title}
                                                            </span>
                                                            {lesson.time && (
                                                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                                                    <Play className="w-2.5 h-2.5" /> {lesson.time}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;
