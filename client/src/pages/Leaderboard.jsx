import React, { useState } from 'react';
import { Trophy, Medal, Award, TrendingUp, Flame, Star, ChevronUp, ChevronDown } from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Green: #00E099
// Yellow: #FFD900
// Pink: #FF0055

// --- MOCK DATA ---

const currentUser = {
    rank: 2,
    name: "John Doe",
    points: 2720,
    percentile: "Top 5%",
    avatar: "JD"
};

const overallLeaderboard = [
    {
        rank: 1,
        name: "Tracy Gao Wen",
        courses: 15,
        avg: "94%",
        points: 2845,
        badge: "Platinum",
        trend: "up",
        avatar: "SM",
        color: "bg-[#E0F7FA] text-[#0071B2]" // Light Cyan/Blue
    },
    {
        rank: 2,
        name: "Captain Vishal Nanda",
        courses: 12,
        avg: "87%",
        points: 2720,
        badge: "Gold",
        trend: "stable",
        avatar: "JD",
        color: "bg-[#FFFDE7] text-[#FFD900]" // Light Yellow/Gold
    },
    {
        id: 3,
        rank: 3,
        name: "Captain Sarnbir Singh Sawhney",
        courses: 14,
        avg: "89%",
        points: 2650,
        badge: "Gold",
        trend: "up",
        avatar: "EC",
        color: "bg-[#FFFDE7] text-[#FFD900]"
    },
    {
        rank: 4,
        name: "Captain Maulik Hathi",
        courses: 11,
        avg: "92%",
        points: 2580,
        badge: "Gold",
        trend: "down",
        avatar: "MB",
        color: "bg-gray-50 text-gray-600"
    },
    {
        rank: 5,
        name: "⁠Captain RS Minhas",
        courses: 13,
        avg: "88%",
        points: 2450,
        badge: "Silver",
        trend: "up",
        avatar: "LW",
        color: "bg-gray-50 text-gray-600"
    },
    {
        rank: 6,
        name: "Mr. Sumallya Nag",
        courses: 10,
        avg: "86%",
        points: 2380,
        badge: "Silver",
        trend: "stable",
        avatar: "DJ",
        color: "bg-gray-50 text-gray-600"
    },
    {
        rank: 7,
        name: "Captain Peng",
        courses: 12,
        avg: "85%",
        points: 2290,
        badge: "Silver",
        trend: "down",
        avatar: "AS",
        color: "bg-gray-50 text-gray-600"
    },
    {
        rank: 8,
        name: "⁠Mr. Abhishek Arora ",
        courses: 9,
        avg: "83%",
        points: 2150,
        badge: "Bronze",
        trend: "up",
        avatar: "RD",
        color: "bg-gray-50 text-gray-600"
    }
];

const monthlyChampions = [
    {
        rank: 1,
        name: "Tracy Gao Wen",
        achievements: 8,
        streak: "28 day streak",
        points: 485,
        avatar: "EC",
        trend: "up"
    },
    {
        rank: 2,
        name: "Mr. Gurmeet Ranghar",
        achievements: 7,
        streak: "15 day streak",
        points: 450,
        avatar: "JD",
        trend: "up"
    },
    {
        rank: 3,
        name: "Captain Vishal Nanda",
        achievements: 6,
        streak: "21 day streak",
        points: 420,
        avatar: "SM",
        trend: "down"
    },
    {
        rank: 4,
        name: "Captain Sarnbir Singh Sawhney",
        achievements: 7,
        streak: "18 day streak",
        points: 395,
        avatar: "MB",
        trend: "stable"
    },
    {
        rank: 5,
        name: "Captain Maulik Hathi ",
        achievements: 5,
        streak: "12 day streak",
        points: 380,
        avatar: "LW",
        trend: "up"
    }
];

const Leaderboard = () => {
    const [activeTab, setActiveTab] = useState('Overall');

    const renderBadge = (badge) => {
        switch (badge) {
            case 'Platinum': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F7FA] text-[#0071B2] border border-[#0071B2]/20">Platinum</span>;
            case 'Gold': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFFDE7] text-[#FFD900] border border-[#FFD900]/20">Gold</span>;
            case 'Silver': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 border border-gray-200">Silver</span>;
            case 'Bronze': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-200">Bronze</span>;
            default: return null;
        }
    };

    const renderRankIcon = (rank) => {
        if (rank === 1) return <Trophy className="w-5 h-5 text-[#FFD900]" />; // Gold Trophy
        if (rank === 2) return <Medal className="w-5 h-5 text-[#0071B2]" />;   // Silver/Blue Medal
        if (rank === 3) return <Medal className="w-5 h-5 text-orange-500" />;  // Bronze Medal
        return <span className="text-gray-400 font-bold">#{rank}</span>;
    };

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            
            {/* --- Page Header --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
                <p className="text-gray-500 mt-2">See how you rank among your peers</p>
            </div>

            {/* --- "Your Rank" Banner --- */}
            <div className="bg-[#0071B2] rounded-3xl p-6 shadow-md flex items-center justify-between text-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                
                <div className="flex items-center gap-6 relative z-10">
                    <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center bg-[#005f96] shadow-inner">
                        <span className="text-xl font-bold">{currentUser.avatar}</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl font-bold">Your Rank: 1</h2>
                            {/* <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-medium backdrop-blur-sm">Top 5%</span> */}
                        </div>
                        <p className="text-blue-100 text-sm mt-1">You're in the {currentUser.percentile}!</p>
                    </div>
                </div>

                <div className="text-right relative z-10">
                    <span className="block text-3xl font-bold">{currentUser.points.toLocaleString()}</span>
                    <span className="text-blue-100 text-xs uppercase tracking-wider font-medium">Total Points</span>
                </div>
            </div>

            {/* --- Tabs --- */}
            <div className="bg-gray-100 p-1.5 rounded-xl flex items-center gap-1 w-full md:w-80">
                {['Overall', 'This Month'].map((tab) => (
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

            {/* --- Leaderboard List --- */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                
                {/* Header Row */}
                <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeTab === 'Overall' ? 'bg-[#FFFDE7]' : 'bg-[#E0F7FA]'}`}>
                        {activeTab === 'Overall' ? <Trophy className={`w-5 h-5 ${activeTab === 'Overall' ? 'text-[#FFD900]' : 'text-[#0071B2]'}`} /> : <TrendingUp className="w-5 h-5 text-[#0071B2]" />}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            {activeTab === 'Overall' ? 'Top Performers' : 'Monthly Champions'}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                            {activeTab === 'Overall' ? 'All-time leaderboard rankings' : 'Top performers this month'}
                        </p>
                    </div>
                </div>

                {/* List Items */}
                <div className="divide-y divide-gray-50">
                    {(activeTab === 'Overall' ? overallLeaderboard : monthlyChampions).map((user, index) => (
                        <div 
                            key={index} 
                            className={`p-6 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors hover:bg-gray-50/50 
                                ${user.rank <= 3 && activeTab === 'Overall' ? 'bg-gradient-to-r from-transparent via-transparent to-gray-50/30' : ''}`}
                        >
                            
                            {/* Left Side: Rank & Info */}
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                {/* Rank Icon */}
                                <div className="w-8 flex justify-center flex-shrink-0">
                                    {renderRankIcon(user.rank)}
                                </div>

                                {/* Avatar & Details */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm 
                                        ${user.rank === 1 ? 'bg-[#0071B2] text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                                        {user.avatar}
                                    </div>
                                    
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-bold text-gray-900">{user.name}</h4>
                                            {user.badge && renderBadge(user.badge)}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                                            {activeTab === 'Overall' ? (
                                                <>
                                                    <span>{user.courses} courses</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>Avg: {user.avg}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>{user.achievements} achievements</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span className="flex items-center text-[#0071B2] font-medium">
                                                        <Flame className="w-3 h-3 mr-1" />
                                                        {user.streak}
                                                    </span>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Points */}
                            <div className="text-right min-w-[100px]">
                                <span className={`text-xl font-extrabold block ${user.rank <= 3 ? 'text-[#00E099]' : 'text-[#0071B2]'}`}>
                                    {user.points.toLocaleString()}
                                </span>
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Points</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Leaderboard;