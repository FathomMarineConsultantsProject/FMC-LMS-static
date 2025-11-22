import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Headphones, Play, Clock, Users, Activity, 
    Monitor, Battery, Wifi, Box, Award, Star, 
    Flame, Anchor, CloudRain, CheckCircle, AlertTriangle, 
    Zap, Settings
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Pink: #FF0055
// Yellow: #FFD900
// Green: #00E099

// --- MOCK DATA ---

const scenarios = [
    {
        id: 1,
        title: "Bridge Fire Emergency Response",
        duration: "20 min",
        roles: "3 roles",
        conditions: ["Rough Seas", "Night"],
        objectives: [
            "Identify fire source within 30 seconds",
            "Activate fire alarm system"
        ],
        difficulty: "Hard",
        difficultyColor: "bg-[#FF0055]/10 text-[#FF0055]", // Pink
        icon: Flame,
        iconBg: "bg-[#FFF0F5]",
        iconColor: "text-[#FF0055]"
    },
    {
        id: 2,
        title: "Man Overboard Recovery",
        duration: "25 min",
        roles: "3 roles",
        conditions: ["Storm", "Dawn"],
        objectives: [
            "Execute immediate response maneuvers",
            "Deploy rescue equipment efficiently"
        ],
        difficulty: "Extreme",
        difficultyColor: "bg-[#0071B2]/10 text-[#0071B2]", // Blue
        icon: LifeBuoy,
        iconBg: "bg-[#E0F7FA]",
        iconColor: "text-[#0071B2]"
    },
    {
        id: 3,
        title: "Engine Room Flooding Emergency",
        duration: "30 min",
        roles: "3 roles",
        conditions: ["Heavy Seas", "Day"],
        objectives: [
            "Locate and assess flooding source",
            "Activate emergency pumping systems"
        ],
        difficulty: "Extreme",
        difficultyColor: "bg-[#00C2CB]/10 text-[#008C93]", // Cyan
        icon: Waves,
        iconBg: "bg-[#E0F7FA]",
        iconColor: "text-[#00C2CB]"
    },
    {
        id: 4,
        title: "Collision Avoidance in Fog",
        duration: "18 min",
        roles: "3 roles",
        conditions: ["Fog", "Night"],
        objectives: [
            "Maintain safe navigation speed",
            "Avoid collision using radar"
        ],
        difficulty: "Hard",
        difficultyColor: "bg-[#FFD900]/20 text-[#B29700]", // Yellow
        icon: Anchor,
        iconBg: "bg-[#FFFDE7]",
        iconColor: "text-[#FFD900]"
    }
];

const equipment = [
    {
        id: 1,
        name: "Maritime VR Headset #1",
        model: "Meta Quest Pro",
        location: "Training Center Alpha",
        status: "Available",
        battery: "85%",
        specs: {
            resolution: "1800x1920 per eye",
            refresh: "90Hz",
            tracking: "Inside-out 6DOF"
        },
        icon: Headphones
    },
    {
        id: 2,
        name: "Haptic Feedback Gloves Set #1",
        model: "HaptX Gloves DK2",
        location: "Training Center Alpha",
        status: "In Use",
        battery: "42%",
        specs: {
            feedback: "4 pounds per finger",
            tactile: "130 points per hand",
            tracking: "Sub-millimeter"
        },
        icon: Box // Simulating gloves icon
    }
];

// Helper icons (since some specific ones might not be in basic Lucide set)
import { LifeBuoy, Waves } from 'lucide-react';

const Immersive = () => {
    const navigate=  useNavigate();
    const [activeTab, setActiveTab] = useState('Scenarios');

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-10 pb-20">
            
            {/* --- Header --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Immersive Scenario Simulator</h1>
                    <p className="text-gray-500 mt-2">Immersive virtual reality training for maritime safety scenarios</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Zap className="w-4 h-4" /> AI Assistant
                    </button>
                    <button className="px-4 py-2 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors flex items-center gap-2">
                        <Settings className="w-4 h-4" /> Equipment Check
                    </button>
                </div>
            </div>

            {/* --- Tabs --- */}
            <div className="flex border-b border-gray-200">
                {['Scenarios', 'Active Session', 'Equipment', 'Performance'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-4 text-sm font-bold border-b-2 transition-all duration-200 
                        ${activeTab === tab 
                            ? 'border-[#0071B2] text-[#0071B2]' 
                            : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* --- TAB CONTENT: SCENARIOS --- */}
            {activeTab === 'Scenarios' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
                    {scenarios.map((scenario) => (
                        <div key={scenario.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#00C2CB] transition-all flex flex-col h-full">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${scenario.iconBg} ${scenario.iconColor}`}>
                                    <scenario.icon className="w-6 h-6" />
                                </div>
                                <span className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${scenario.difficultyColor}`}>
                                    {scenario.difficulty}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{scenario.title}</h3>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {scenario.duration}
                                </span>
                                <span className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600 flex items-center gap-1">
                                    <Users className="w-3 h-3" /> {scenario.roles}
                                </span>
                                {scenario.conditions.map((cond, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600">
                                        {cond}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-2 mb-6 flex-1">
                                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Learning Objectives:</p>
                                <ul className="space-y-1">
                                    {scenario.objectives.map((obj, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                            {obj}
                                        </li>
                                    ))}
                                    <li className="text-sm text-gray-400 italic">+1 more objectives</li>
                                </ul>
                            </div>

                            {/* Action */}
                            <button className="w-full py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center justify-center gap-2"
                            onClick={()=>navigate(`/courseId`)}>
                                <Play className="w-4 h-4 fill-current" /> Start Session
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* --- TAB CONTENT: EQUIPMENT --- */}
            {activeTab === 'Equipment' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-gray-900">Immersive Equipment Status</h2>
                        <span className="px-2 py-0.5 bg-[#00E099]/10 text-[#00E099] text-xs font-bold rounded">All Systems Normal</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {equipment.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row gap-6">
                                {/* Icon Area */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center">
                                        <item.icon className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Available' ? 'bg-[#0071B2] text-white' : 'bg-gray-200 text-gray-500'}`}>
                                        {item.status}
                                    </div>
                                </div>

                                {/* Details Area */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                        <div className="flex items-center text-xs font-medium text-gray-500">
                                            <Battery className={`w-3 h-3 mr-1 ${parseInt(item.battery) > 50 ? 'text-[#00E099]' : 'text-[#FFD900]'}`} />
                                            {item.battery}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium mb-4">{item.model}</p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Location:</span>
                                            <span className="font-medium text-gray-900">{item.location}</span>
                                        </div>
                                        {Object.entries(item.specs).map(([key, value]) => (
                                            <div key={key} className="flex justify-between text-sm">
                                                <span className="text-gray-500 capitalize">{key}:</span>
                                                <span className="font-medium text-gray-900">{value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full py-2.5 bg-[#0071B2] text-white font-bold rounded-lg hover:bg-[#005f96] transition-colors text-sm">
                                        Reserve
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- TAB CONTENT: PERFORMANCE --- */}
            {activeTab === 'Performance' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                    {/* Training Hours Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Training Hours</p>
                        <h3 className="text-5xl font-extrabold text-[#0071B2] mb-2">47.5</h3>
                        <p className="text-xs text-gray-400 mb-6">Hours in VR</p>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                            <div className="bg-[#0071B2] h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500">75% of recommended training</p>
                    </div>

                    {/* Scenarios Completed Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Scenarios Completed</p>
                        <h3 className="text-5xl font-extrabold text-[#00E099] mb-2">12<span className="text-2xl text-gray-300">/15</span></h3>
                        <p className="text-xs text-gray-400 mb-6">Scenarios</p>
                        <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                            <div className="bg-[#00E099] h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500">3 scenarios remaining</p>
                    </div>

                    {/* Average Performance Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Average Performance</p>
                        <h3 className="text-5xl font-extrabold text-[#FF0055] mb-2">87%</h3>
                        <p className="text-xs text-gray-400 mb-6">Overall Score</p>
                        <div className="flex justify-center gap-1 mb-2 text-[#FFD900]">
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 text-gray-200 fill-current" />
                        </div>
                        <p className="text-xs text-gray-500">Excellent performance</p>
                    </div>
                </div>
            )}
            
            {/* Placeholder for Active Session */}
            {activeTab === 'Active Session' && (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Monitor className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No Active Session</h3>
                    <p className="text-gray-500 mt-2 mb-6">Start a scenario from the Scenarios tab to begin training.</p>
                    <button 
                        onClick={() => setActiveTab('Scenarios')}
                        className="px-6 py-2 border-2 border-[#0071B2] text-[#0071B2] font-bold rounded-xl hover:bg-[#E0F7FA] transition-colors"
                    >
                        Browse Scenarios
                    </button>
                </div>
            )}

        </div>
    );
};

export default Immersive;