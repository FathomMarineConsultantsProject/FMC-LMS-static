import React from 'react';
import { 
    BookOpen, FileText, Video, Trash2, ExternalLink, 
    MoreHorizontal, Clock 
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Pink: #FF0055

const bookmarksList = [
    {
        id: 1,
        title: "Marine Engineering Fundamentals - Module 5",
        type: "Course",
        context: "Marine Engineering",
        saved: "Saved 2 days ago",
        icon: BookOpen,
        iconBg: "bg-[#E0F7FA]", // Light Cyan
        iconColor: "text-[#0071B2]" // Blue
    },
    {
        id: 2,
        title: "Latest Maritime Safety Regulations 2024",
        type: "Article",
        context: "Resources",
        saved: "Saved 5 days ago",
        icon: FileText,
        iconBg: "bg-[#00E099]/10", // Mint Green Tint
        iconColor: "text-[#00E099]" // Mint Green
    },
    {
        id: 3,
        title: "Ship Navigation in Rough Weather",
        type: "Video",
        context: "Navigation Protocols",
        saved: "Saved 1 week ago",
        icon: Video,
        iconBg: "bg-[#FFD900]/10", // Yellow Tint
        iconColor: "text-[#FFD900]" // Yellow
    },
    {
        id: 4,
        title: "Maritime Law - Chapter 3: International Waters",
        type: "Course",
        context: "Maritime Law",
        saved: "Saved 2 weeks ago",
        icon: BookOpen,
        iconBg: "bg-[#E0F7FA]",
        iconColor: "text-[#0071B2]"
    },
    {
        id: 5,
        title: "Environmental Best Practices for Shipping",
        type: "Article",
        context: "Environment",
        saved: "Saved 3 weeks ago",
        icon: FileText,
        iconBg: "bg-[#00E099]/10",
        iconColor: "text-[#00E099]"
    }
];

const Bookmarks = () => {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            
            {/* --- Header Section --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Bookmarks</h1>
                <p className="text-gray-500 mt-2">Quick access to your saved learning resources</p>
            </div>

            {/* --- Bookmarks List --- */}
            <div className="space-y-4">
                {bookmarksList.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C2CB] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                    >
                        {/* Left: Icon & Content */}
                        <div className="flex items-start gap-5 flex-1">
                            {/* Icon Box */}
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                                <item.icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={1.5} />
                            </div>
                            
                            {/* Text Content */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0071B2] transition-colors">
                                    {item.title}
                                </h3>
                                
                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                    {/* Type Badge */}
                                    <span className="px-2.5 py-0.5 rounded-md border border-gray-200 bg-gray-50 text-xs font-bold text-gray-600 uppercase tracking-wide">
                                        {item.type}
                                    </span>
                                    
                                    <span className="text-gray-500 font-medium">{item.context}</span>
                                </div>

                                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.saved}
                                </p>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                            <button className="flex-1 md:flex-none px-5 py-2 border border-gray-200 text-gray-600 text-sm font-bold rounded-lg hover:bg-gray-50 hover:text-[#0071B2] hover:border-[#0071B2] transition-all flex items-center justify-center gap-2">
                                View
                            </button>
                            
                            <button 
                                className="p-2 border border-transparent text-gray-400 hover:text-[#FF0055] hover:bg-[#FFF0F5] rounded-lg transition-colors"
                                title="Remove Bookmark"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State (Optional Visual) */}
            {bookmarksList.length === 0 && (
                <div className="text-center py-20">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bookmark className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No bookmarks yet</h3>
                    <p className="text-gray-500 mt-2">Save courses and articles to access them quickly here.</p>
                </div>
            )}
        </div>
    );
};

// Helper import for the Empty State icon
import { Bookmark } from 'lucide-react';

export default Bookmarks;