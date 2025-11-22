import React, { useState } from 'react';
import { 
    AlertTriangle, CheckCircle, FileText, Flame, Plus, 
    Clock, MapPin, Upload, X, ChevronRight, AlertOctagon, 
    Droplets, MoreHorizontal, Calendar, Anchor, AlertCircle
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Pink: #FF0055
// Yellow: #FFD900
// Green: #00E099

// --- MOCK DATA ---
const stats = [
    {
        title: "Total Incidents",
        value: "14",
        icon: AlertOctagon,
        color: "text-[#0071B2] bg-[#E0F7FA]"
    },
    {
        title: "Open Incidents",
        value: "2",
        icon: Clock,
        color: "text-[#FF0055] bg-[#FFF0F5]"
    },
    {
        title: "Converted to Training",
        value: "10",
        icon: FileText,
        color: "text-[#00E099] bg-[#00E099]/10"
    },
    {
        title: "High Priority",
        value: "7",
        icon: Flame,
        color: "text-[#FFD900] bg-[#FFFDE7]"
    }
];

const recentIncidents = [
    {
        id: 1,
        title: "Fire in Engine Room",
        date: "11/5/2025",
        location: "Engine Room",
        description: "Fire outbreak due to fuel leakage near the main engine exhaust manifold.",
        type: "Equipment Failure",
        severity: "Critical",
        status: "Converted to Training",
        icon: Flame,
        iconBg: "bg-[#FF0055]/10",
        iconColor: "text-[#FF0055]"
    },
    {
        id: 2,
        title: "Oil Spill on Deck",
        date: "11/3/2025",
        location: "Cargo Hold",
        description: "Oil leakage reported during cargo transfer operations at North Sea anchorage.",
        type: "Environmental",
        severity: "Critical",
        status: "Converted to Training",
        icon: Droplets,
        iconBg: "bg-[#0071B2]/10",
        iconColor: "text-[#0071B2]"
    },
    {
        id: 3,
        title: "Lifeboat Davit Malfunction",
        date: "10/28/2025",
        location: "Boat Deck",
        description: "Port side lifeboat davit winch failed during routine drill inspection.",
        type: "Equipment Failure",
        severity: "High",
        status: "Open",
        icon: AlertCircle,
        iconBg: "bg-[#FFD900]/10",
        iconColor: "text-[#FFD900]"
    },
    {
        id: 4,
        title: "Mooring Line Snap",
        date: "10/15/2025",
        location: "Forward Station",
        description: "Forward spring line snapped during berthing operations due to high tension.",
        type: "Safety",
        severity: "High",
        status: "Converted to Training",
        icon: Anchor,
        iconBg: "bg-[#00E099]/10",
        iconColor: "text-[#00E099]"
    },
    {
        id: 5,
        title: "Near Miss: Crane Operation",
        date: "10/10/2025",
        location: "Deck 3",
        description: "Cargo crane swung dangerously close to bridge wing during high winds.",
        type: "Near Miss",
        severity: "Medium",
        status: "Open",
        icon: AlertTriangle,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-600"
    }
];

const Incident = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // Modal Form State (Simplified for UI)
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        severity: '',
        priority: 'Medium',
        location: '',
        date: '',
        description: ''
    });

    // Handle Drag & Drop (Visual only)
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 pb-20">
            
            {/* --- Header --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Incident Reporting</h1>
                    <p className="text-gray-500 mt-2">Report incidents and convert them into learning modules</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" /> Report Incident
                </button>
            </div>

            {/* --- Stats Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                            <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Recent Incidents List --- */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Incidents</h3>
                    <button className="text-[#0071B2] text-sm font-bold hover:underline">View All</button>
                </div>
                
                <div className="space-y-4">
                    {recentIncidents.map((incident) => (
                        <div key={incident.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                
                                {/* Left: Icon & Main Info */}
                                <div className="flex gap-5">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${incident.iconBg}`}>
                                        <incident.icon className={`w-6 h-6 ${incident.iconColor}`} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="text-lg font-bold text-gray-900">{incident.title}</h4>
                                            {incident.status === 'Open' && (
                                                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded">
                                                    Action Required
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" /> {incident.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" /> {incident.location}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                                            {incident.description}
                                        </p>
                                        <div className="mt-4 flex gap-2">
                                            <span className="text-xs font-bold text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                                                {incident.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Status & Actions */}
                                <div className="flex flex-row lg:flex-col justify-between items-end gap-4 min-w-[140px]">
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded
                                            ${incident.severity === 'Critical' ? 'bg-red-50 text-red-600' : 
                                              incident.severity === 'High' ? 'bg-orange-50 text-orange-600' : 
                                              'bg-blue-50 text-blue-600'}`}>
                                            {incident.severity}
                                        </span>
                                        
                                        {incident.status === 'Converted to Training' ? (
                                            <span className="px-3 py-1 bg-[#00E099]/10 text-[#00E099] text-xs font-bold rounded flex items-center gap-1 whitespace-nowrap">
                                                <CheckCircle className="w-3 h-3" /> Converted
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded flex items-center gap-1 whitespace-nowrap">
                                                <Clock className="w-3 h-3" /> Open
                                            </span>
                                        )}
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-[#0071B2]">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CREATE INCIDENT MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200 border border-gray-100">
                        
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 px-8 py-6 flex justify-between items-center z-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Create Incident Report</h2>
                                <p className="text-sm text-gray-500">Fill out the details to report a new incident</p>
                            </div>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 space-y-8">
                            
                            {/* 1. Basic Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Incident Title</label>
                                    <input type="text" placeholder="Brief description" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] transition-all" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Incident Type</label>
                                    <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                                        <option>Select type</option>
                                        <option>Equipment Failure</option>
                                        <option>Environmental</option>
                                        <option>Health & Safety</option>
                                        <option>Security</option>
                                        <option>Near Miss</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Severity</label>
                                    <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Critical</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                                    <select className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] bg-white text-gray-600">
                                        <option>Select location</option>
                                        <option>Engine Room</option>
                                        <option>Bridge</option>
                                        <option>Deck</option>
                                        <option>Cargo Hold</option>
                                        <option>Galley</option>
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                    <textarea rows="3" placeholder="Detailed description of what happened..." className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] resize-none"></textarea>
                                </div>
                            </div>

                            {/* 2. Media Upload */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Evidence (Images/Videos)</label>
                                <div 
                                    className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all duration-200
                                        ${dragActive ? 'border-[#0071B2] bg-[#E0F7FA]' : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'}`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                >
                                    <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                                        <Upload className="w-8 h-8 text-[#0071B2]" />
                                    </div>
                                    <p className="text-base font-bold text-gray-900">Click to upload or drag and drop</p>
                                    <p className="text-sm text-gray-500 mt-1 mb-4">SVG, PNG, JPG or MP4 (max. 800x400px)</p>
                                    <input type="file" multiple className="hidden" id="file-upload" />
                                    <label htmlFor="file-upload" className="px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 cursor-pointer hover:bg-gray-50 hover:text-[#0071B2] transition-all shadow-sm">
                                        Browse Files
                                    </label>
                                </div>
                            </div>

                            {/* 3. Analysis & Actions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Immediate Actions Taken</label>
                                    <textarea rows="2" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] resize-none" placeholder="What was done immediately?"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Root Cause Analysis</label>
                                    <textarea rows="3" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] resize-none" placeholder="Why did this happen?"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Lessons Learned</label>
                                    <textarea rows="3" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] resize-none" placeholder="Key takeaways..."></textarea>
                                </div>
                            </div>

                        </div>

                        {/* Modal Footer */}
                        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-8 py-6 flex justify-end gap-4">
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 font-bold hover:bg-white hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-8 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Create Report
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Incident;