import React, { useState } from 'react';
import { 
    MessageSquare, Users, BookOpen, Calendar, ThumbsUp, MessageCircle, 
    Plus, ChevronRight, Search, UserPlus, Video, Clock
} from 'lucide-react';



// --- MOCK DATA ---
const stats = [
    {
        title: "Active Discussions",
        value: "142",
        icon: MessageSquare,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    },
    {
        title: "Community Members",
        value: "2,845",
        icon: Users,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    },
    {
        title: "Study Groups",
        value: "28",
        icon: BookOpen,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    }
];

const discussions = [
    {
        id: 1,
        title: "Best practices for marine engine maintenance?",
        excerpt: "I'm looking for recommendations on preventive maintenance schedules for 2-stroke diesel engines...",
        author: "Michael Brown",
        time: "2 hours ago",
        replies: 24,
        likes: 45,
        tag: "Engineering",
        tagColor: "bg-blue-100 text-blue-700",
        avatar: "MB",
        avatarBg: "bg-[#0071B2]"
    },
    {
        id: 2,
        title: "New IMO regulations - Discussion",
        excerpt: "Let's discuss the impact of the new safety regulations on daily operations and crew training requirements...",
        author: "Sarah Martinez",
        time: "5 hours ago",
        replies: 18,
        likes: 32,
        tag: "Safety",
        tagColor: "bg-[#00E099]/20 text-[#00B37A]", // Mint Green
        avatar: "SM",
        avatarBg: "bg-[#00C2CB]"
    },
    {
        id: 3,
        title: "Navigation systems comparison",
        excerpt: "Has anyone compared the latest GPS navigation systems? I'm looking to upgrade our current setup...",
        author: "John Doe",
        time: "1 day ago",
        replies: 15,
        likes: 28,
        tag: "Technology",
        tagColor: "bg-[#FF0055]/10 text-[#FF0055]", // Pink
        avatar: "JD",
        avatarBg: "bg-[#0071B2]"
    }
];

const studyGroups = [
    {
        id: 1,
        title: "Marine Engineering Study Group",
        members: 156,
        status: "Very Active",
        tag: "Engineering",
        tagColor: "bg-blue-100 text-blue-700"
    },
    {
        id: 2,
        title: "Navigation Certification Prep",
        members: 89,
        status: "Active",
        tag: "Navigation",
        tagColor: "bg-[#FFD900]/20 text-[#B29700]" // Yellow
    },
    {
        id: 3,
        title: "Maritime Law Discussion",
        members: 67,
        status: "Active",
        tag: "Law",
        tagColor: "bg-gray-100 text-gray-700"
    },
    {
        id: 4,
        title: "Safety Protocol Reviews",
        members: 124,
        status: "Very Active",
        tag: "Safety",
        tagColor: "bg-[#00E099]/20 text-[#00B37A]"
    }
];

const events = [
    {
        id: 1,
        title: "Live Q&A: Marine Safety",
        date: "25",
        month: "MAY",
        time: "3:00 PM",
        registered: 45,
        type: "Webinar",
        typeColor: "border-gray-200 text-gray-600"
    },
    {
        id: 2,
        title: "Study Session: Navigation",
        date: "26",
        month: "MAY",
        time: "6:00 PM",
        registered: 28,
        type: "Study Group",
        typeColor: "border-[#0071B2] text-[#0071B2] bg-[#E0F7FA]"
    },
    {
        id: 3,
        title: "Guest Lecture: Maritime Law",
        date: "28",
        month: "MAY",
        time: "4:00 PM",
        registered: 67,
        type: "Lecture",
        typeColor: "border-gray-200 text-gray-600"
    }
];

const Community = () => {
    const [activeTab, setActiveTab] = useState('Discussions');

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            
            {/* --- Header --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Community</h1>
                <p className="text-gray-500 mt-2">Connect with fellow maritime professionals and learners</p>
            </div>

            {/* --- Top Stats --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm text-gray-500 font-medium">{stat.title}</span>
                            {/* <div className={`p-2 rounded-xl ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div> */}
                        </div>
                        <div className="flex items-end justify-between">
                            <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Main Content Area --- */}
            <div className="space-y-6">
                
                {/* Controls Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Tabs */}
                    <div className="bg-gray-100 p-1.5 rounded-xl flex items-center gap-1 w-full md:w-auto">
                        {['Discussions', 'Study Groups', 'Events'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 md:flex-none px-8 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 
                                ${activeTab === tab 
                                    ? 'bg-white text-[#0071B2] shadow-sm' 
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Action Button (changes based on tab) */}
                    <button className="w-full md:w-auto px-6 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center justify-center gap-2">
                        {activeTab === 'Discussions' && <><Plus className="w-5 h-5" /> New Discussion</>}
                        {activeTab === 'Study Groups' && <><UserPlus className="w-5 h-5" /> Create Group</>}
                        {activeTab === 'Events' && <><Calendar className="w-5 h-5" /> Create Event</>}
                    </button>
                </div>

                {/* --- TAB CONTENT --- */}

                {/* 1. DISCUSSIONS TAB */}
                {activeTab === 'Discussions' && (
                    <div className="space-y-4 animation-fade-in">
                        <div className="flex items-center gap-3 mb-2">
                            <MessageSquare className="w-5 h-5 text-[#0071B2]" />
                            <h3 className="text-xl font-bold text-gray-900">Recent Discussions</h3>
                        </div>

                        {discussions.map((post) => (
                            <div key={post.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C2CB] transition-all">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${post.avatarBg}`}>
                                            {post.avatar}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 hover:text-[#0071B2] cursor-pointer transition-colors">
                                                {post.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            
                                            <div className="flex items-center flex-wrap gap-4 text-xs text-gray-500 font-medium">
                                                <span className="text-gray-900 font-semibold">{post.author}</span>
                                                <span>•</span>
                                                <span>{post.time}</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.replies} replies</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> {post.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col items-end gap-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.tagColor}`}>
                                            {post.tag}
                                        </span>
                                        <button className="px-4 py-2 border border-gray-200 text-gray-600 text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            View Discussion
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 2. STUDY GROUPS TAB */}
                {activeTab === 'Study Groups' && (
                    <div className="animation-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-5 h-5 text-[#0071B2]" />
                            <h3 className="text-xl font-bold text-gray-900">Study Groups</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {studyGroups.map((group) => (
                                <div key={group.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-gray-900">{group.title}</h4>
                                            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-md ${group.tagColor}`}>
                                                {group.tag}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                                            <span className="flex items-center"><Users className="w-4 h-4 mr-1.5" /> {group.members} members</span>
                                            <span>•</span>
                                            <span className="text-[#00E099] font-medium bg-[#00E099]/10 px-2 py-0.5 rounded">{group.status}</span>
                                        </div>
                                    </div>
                                    <button className="w-full py-3 border border-gray-200 text-[#0071B2] font-bold rounded-xl hover:bg-[#E0F7FA] hover:border-[#E0F7FA] transition-all">
                                        Join Group
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. EVENTS TAB */}
                {activeTab === 'Events' && (
                    <div className="animation-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-5 h-5 text-[#00E099]" />
                            <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
                        </div>

                        <div className="space-y-4">
                            {events.map((event) => (
                                <div key={event.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0071B2] transition-all flex flex-col md:flex-row items-center gap-6">
                                    
                                    {/* Date Box */}
                                    <div className="flex-shrink-0 bg-gray-50 rounded-xl p-4 text-center min-w-[80px] border border-gray-200">
                                        <span className="block text-2xl font-bold text-[#0071B2]">{event.date}</span>
                                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">{event.month}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h4>
                                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 mb-2">
                                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {event.time}</span>
                                            <span className="hidden md:inline">•</span>
                                            <span className="flex items-center"><Users className="w-4 h-4 mr-1.5" /> {event.registered} registered</span>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${event.typeColor}`}>
                                            {event.type}
                                        </span>
                                        <button className="w-full md:w-auto px-6 py-2.5 bg-[#0071B2] text-white font-bold rounded-lg hover:bg-[#005f96] transition-colors">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

// Helper import for the Events icon
import { TrendingUp } from 'lucide-react';

export default Community;