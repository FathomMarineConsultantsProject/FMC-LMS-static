import React, { useState } from 'react';
import { 
    Calendar, BookOpen, Video, FileText, Users, Shield, 
    Plus, Filter, Edit2, Trash2, Link as LinkIcon, 
    MoreHorizontal, ChevronDown, Layout, Monitor, PlayCircle
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Pink: #FF0055
// Yellow: #FFD900
// Green: #00E099

// --- MOCK DATA FOR EACH SECTION ---

const allItems = [
    {
        id: 13,
        type: 'Briefing',
        title: "Briefing with Capt. Manish",
        department: "Navigation Department",
        description: "Masters First time Joining Briefing for a Chemical Tanker at Aberdeen for Glasgow Aberdeen Run.",
        relatedTraining: "Dual Fuel Training",
        tags: ["Navigation", "Briefing"],
        date: "May 25, 2024",
        time: "10:00 AM",
        status: "Scheduled",
        link: "#"
    },
    {
        id: 14,
        type: 'Training',
        title: "Advanced Radar Plotting",
        department: "Navigation Department",
        description: "Hands-on session covering advanced ARPA features and collision avoidance scenarios in high-traffic zones.",
        relatedTraining: "Radar Operations Course",
        tags: ["Navigation", "Training"],
        date: "May 26, 2024",
        time: "02:00 PM",
        status: "Upcoming",
        link: "#"
    }
];

const meetingsData = [
    {
        id: 101,
        type: 'Meeting',
        title: "Quarterly Safety Review",
        department: "Safety Department",
        description: "Reviewing Q1 safety incidents and updating protocols.",
        relatedTraining: "Safety Management System",
        tags: ["Safety", "Meeting"],
        date: "June 1, 2024",
        time: "09:00 AM",
        status: "Mandatory",
        link: "#"
    },
    {
        id: 102,
        type: 'Meeting',
        title: "Engineering Team Sync",
        department: "Engineering Department",
        description: "Weekly sync to discuss maintenance schedules and parts inventory.",
        relatedTraining: "Engine Room Resource Management",
        tags: ["Engineering", "Meeting"],
        date: "June 3, 2024",
        time: "11:00 AM",
        status: "Regular",
        link: "#"
    }
];

const trainingsData = [
    {
        id: 201,
        type: 'Training',
        title: "Firefighting Advanced Course",
        department: "Safety Department",
        description: "Practical firefighting drills and advanced techniques for chemical fires.",
        relatedTraining: "Advanced Firefighting",
        tags: ["Safety", "Drill"],
        date: "June 5, 2024",
        time: "08:00 AM",
        status: "Practical",
        link: "#"
    },
    {
        id: 202,
        type: 'Training',
        title: "ECDIS System Update",
        department: "Navigation Department",
        description: "Training on the new software update for the ECDIS chart system.",
        relatedTraining: "ECDIS Type Specific",
        tags: ["Navigation", "Technical"],
        date: "June 7, 2024",
        time: "02:00 PM",
        status: "Virtual",
        link: "#"
    }
];

const briefingsData = [
    {
        id: 301,
        type: 'Briefing',
        title: "Pre-Departure Briefing: Voyage 402",
        department: "Deck Department",
        description: "Route overview, weather forecast analysis, and cargo stowage plan review.",
        relatedTraining: "Passage Planning",
        tags: ["Navigation", "Briefing"],
        date: "May 30, 2024",
        time: "06:00 AM",
        status: "Critical",
        link: "#"
    }
];

const debriefingsData = [
    {
        id: 401,
        type: 'Debriefing',
        title: "Post-Drill Debrief: Oil Spill",
        department: "Environmental",
        description: "Analysis of the response time and containment effectiveness during yesterday's drill.",
        relatedTraining: "SOPEP",
        tags: ["Environment", "Review"],
        date: "May 24, 2024",
        time: "04:00 PM",
        status: "Completed",
        link: "#"
    }
];

const safetyMeetingsData = [
    {
        id: 501,
        type: 'Safety Meeting',
        title: "Safety Committee: June",
        department: "Safety Department",
        description: "Monthly mandatory safety committee meeting for all department heads.",
        relatedTraining: "SMS Implementation",
        tags: ["Safety", "Committee"],
        date: "June 15, 2024",
        time: "10:00 AM",
        status: "Mandatory",
        link: "#"
    }
];

const trainingSessionsData = [
    {
        id: 601,
        type: 'Training Session',
        title: "Simulator Session: Heavy Weather",
        department: "Navigation Department",
        description: "Bridge team management simulation in heavy weather conditions.",
        relatedTraining: "BTM",
        tags: ["Simulation", "Practical"],
        date: "June 10, 2024",
        time: "01:00 PM",
        status: "Scheduled",
        link: "#"
    }
];

const coursesData = [
    {
        id: 701,
        type: 'Course',
        title: "Medical First Aid",
        department: "Medical",
        description: "Refresher course on providing immediate first aid on board.",
        relatedTraining: "STCW Medical",
        tags: ["Medical", "Refresher"],
        date: "Self-Paced",
        time: "-",
        status: "Online",
        link: "#"
    }
];

const uploadedVideosData = [
    {
        id: 801,
        type: 'Video',
        title: "Maintenance Procedure: Pump Overhaul",
        department: "Engineering Department",
        description: "Video guide on the correct procedure for overhauling the main ballast pump.",
        relatedTraining: "Maintenance",
        tags: ["Engineering", "Video"],
        date: "Uploaded May 20",
        time: "15 mins",
        status: "Resource",
        link: "#"
    }
];

// --- FILTERS CONFIG ---
const filters = [
    { id: 'all', label: 'All Items', icon: Layout, data: allItems },
    { id: 'meetings', label: 'Meetings', icon: Calendar, data: meetingsData },
    { id: 'trainings', label: 'Trainings', icon: BookOpen, data: trainingsData },
    { id: 'briefings', label: 'Briefings', icon: Users, data: briefingsData },
    { id: 'debriefings', label: 'Debriefings', icon: FileText, data: debriefingsData },
    { id: 'safety', label: 'Safety Meetings', icon: Shield, data: safetyMeetingsData },
    { id: 'sessions', label: 'Training Sessions', icon: Monitor, data: trainingSessionsData },
    { id: 'videos', label: 'Uploaded Videos', icon: Video, data: uploadedVideosData },
];

const TrainingManagement = () => {
    const [activeFilterId, setActiveFilterId] = useState('all');

    // Get current data based on active filter
    const currentData = filters.find(f => f.id === activeFilterId)?.data || [];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 pb-20">
            
            {/* --- Header --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Training Management</h1>
                    <p className="text-gray-500 mt-2">Manage briefings, meetings, and training sessions</p>
                </div>
                <button className="px-6 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center gap-2">
                    <Plus className="w-5 h-5" /> New Item
                </button>
            </div>

            {/* --- Filter Tabs --- */}
            <div className="flex flex-wrap gap-3 pb-4 border-b border-gray-100">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilterId(filter.id)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all border border-transparent
                        ${activeFilterId === filter.id 
                            ? 'bg-[#0071B2] text-white shadow-sm' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-[#0071B2] hover:text-[#0071B2]'}`}
                    >
                        <filter.icon className="w-4 h-4" />
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* --- Content Section --- */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#E0F7FA] rounded-lg text-[#0071B2]">
                        <Layout className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                        {filters.find(f => f.id === activeFilterId)?.label} 
                        <span className="text-sm font-medium text-gray-400 ml-2">({currentData.length} items)</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentData.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group relative flex flex-col h-full">
                            
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg 
                                        ${item.type === 'Briefing' ? 'bg-orange-50 text-orange-600' : 
                                            item.type === 'Training' ? 'bg-purple-50 text-purple-600' :
                                            item.type === 'Video' ? 'bg-red-50 text-red-600' :
                                            'bg-blue-50 text-[#0071B2]'}`}>
                                        {item.type === 'Video' ? <Video className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">#{item.id} - {item.title}</h3>
                                </div>
                                
                                {/* Actions */}
                                <div className="flex gap-2">
                                    <button className="p-2 text-gray-400 hover:text-[#0071B2] hover:bg-[#E0F7FA] rounded-lg transition-colors flex items-center gap-1 text-xs font-bold">
                                        <Edit2 className="w-3.5 h-3.5" /> Edit
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-[#FF0055] hover:bg-[#FFF0F5] rounded-lg transition-colors flex items-center gap-1 text-xs font-bold">
                                        <Trash2 className="w-3.5 h-3.5" /> Delete
                                    </button>
                                </div>
                            </div>

                            {/* Linked Content */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-[#0071B2] mb-2">
                                    <BookOpen className="w-4 h-4" />
                                    {item.relatedTraining}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md border border-gray-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">
                                {item.description}
                            </p>

                            {/* Footer Action */}
                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                <div className="text-xs font-medium text-gray-500">
                                    {item.date} • {item.time}
                                </div>
                                <a href={item.link} className="flex items-center gap-2 text-sm font-bold text-[#0071B2] hover:underline">
                                    <LinkIcon className="w-4 h-4" />
                                    {item.type === 'Video' ? 'Watch Video' : 'Join Session'}
                                </a>
                            </div>

                        </div>
                    ))}
                    
                    {/* Empty State */}
                    {currentData.length === 0 && (
                        <div className="col-span-full text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-500 font-medium">No items found in this category.</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default TrainingManagement;