import React from 'react';
import { 
    Search, Clock, Calendar, Download, FileText, Ship, 
    LifeBuoy, Waves, Compass, Wrench, Target, ChevronRight, 
    BookOpen, File
} from 'lucide-react';

// --- MOCK DATA ---

const featuredArticle = {
    id: 1,
    title: "The Future of Maritime Technology: AI and Automation",
    excerpt: "Explore how artificial intelligence and automation are revolutionizing the maritime industry, from autonomous vessels to predictive maintenance systems.",
    author: "Dr. Sarah Johnson",
    date: "May 22, 2024",
    readTime: "8 min read",
    tags: ["Featured", "Technology"],
    imageIcon: Ship
};

const recentArticles = [
    {
        id: 1,
        title: "New Maritime Safety Regulations 2024",
        excerpt: "Understanding the latest safety protocols and compliance requirements...",
        author: "Capt. John Smith",
        date: "May 20, 2024",
        readTime: "5 min read",
        category: "Safety",
        icon: LifeBuoy,
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        categoryColor: "bg-red-50 text-red-600"
    },
    {
        id: 2,
        title: "Sustainable Shipping Practices",
        excerpt: "How the maritime industry is adapting to environmental challenges...",
        author: "Dr. Lisa Wang",
        date: "May 18, 2024",
        readTime: "6 min read",
        category: "Environment",
        icon: Waves,
        iconBg: "bg-teal-50",
        iconColor: "text-teal-500",
        categoryColor: "bg-teal-50 text-teal-600"
    },
    {
        id: 3,
        title: "Advanced Navigation Techniques",
        excerpt: "Modern approaches to ship navigation in challenging conditions...",
        author: "Lt. Michael Brown",
        date: "May 15, 2024",
        readTime: "7 min read",
        category: "Navigation",
        icon: Compass,
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
        categoryColor: "bg-orange-50 text-orange-600"
    },
    {
        id: 4,
        title: "Marine Engineering Innovations",
        excerpt: "Breakthrough technologies in ship propulsion and power systems...",
        author: "Eng. Robert Davis",
        date: "May 12, 2024",
        readTime: "6 min read",
        category: "Engineering",
        icon: Wrench,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
        categoryColor: "bg-blue-50 text-blue-600"
    },
    {
        id: 5,
        title: "Career Paths in Maritime Industry",
        excerpt: "Exploring diverse career opportunities in the maritime sector...",
        author: "Prof. Emily Chen",
        date: "May 10, 2024",
        readTime: "5 min read",
        category: "Career",
        icon: Target,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        categoryColor: "bg-purple-50 text-purple-600"
    }
];

const downloadableResources = [
    {
        id: 1,
        title: "IMO Guidelines 2024",
        type: "PDF",
        size: "2.4 MB",
        icon: BookOpen
    },
    {
        id: 2,
        title: "Maritime Safety Handbook",
        type: "PDF",
        size: "5.1 MB",
        icon: BookOpen
    },
    {
        id: 3,
        title: "Navigation Charts Collection",
        type: "ZIP",
        size: "15.3 MB",
        icon: BookOpen
    },
    {
        id: 4,
        title: "Engineering Standards Manual",
        type: "PDF",
        size: "8.7 MB",
        icon: BookOpen
    }
];

const Resources = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-10">
            
            {/* --- Header Section --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Blogs & Reading Material</h1>
                <p className="text-gray-500 mt-2">Stay updated with the latest maritime insights and resources</p>
            </div>

            {/* --- Search Bar --- */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search articles, guides, and resources..." 
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] transition-all bg-white shadow-sm"
                />
            </div>

            {/* --- Featured Article --- */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
                {/* Image Placeholder Area */}
                <div className="lg:w-2/5 bg-[#E0F7FA] flex items-center justify-center min-h-[250px] lg:min-h-full">
                    <featuredArticle.imageIcon className="w-24 h-24 text-[#0071B2] opacity-80" />
                </div>
                
                {/* Content Area */}
                <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                        {featuredArticle.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className={`px-3 py-1 text-xs font-bold rounded-full 
                                ${tag === 'Featured' ? 'bg-[#0071B2] text-white' : 'bg-gray-100 text-gray-600'}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#0071B2] cursor-pointer transition-colors">
                        {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="font-medium text-gray-900">{featuredArticle.author}</span>
                            <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" /> {featuredArticle.date}</span>
                            <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5" /> {featuredArticle.readTime}</span>
                        </div>
                        <button className="px-5 py-2 bg-[#0071B2] text-white text-sm font-bold rounded-lg hover:bg-[#005f96] transition-colors">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Main Content Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* LEFT COLUMN: Recent Articles (2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Articles</h3>
                    
                    <div className="space-y-4">
                        {recentArticles.map((article) => (
                            <div key={article.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C2CB] transition-all duration-300 group">
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${article.iconBg}`}>
                                        <article.icon className={`w-8 h-8 ${article.iconColor}`} />
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-md ${article.categoryColor}`}>
                                                {article.category}
                                            </span>
                                        </div>
                                        
                                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0071B2] transition-colors">
                                            {article.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        
                                        <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                                            <span className="text-gray-600">{article.author}</span>
                                            <span>•</span>
                                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.date}</span>
                                            <span>•</span>
                                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN: Downloadable Resources (1/3) */}
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Downloadable Resources</h3>
                    
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                        {downloadableResources.map((resource) => (
                            <div key={resource.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="p-2 bg-[#E0F7FA] rounded-lg text-[#0071B2]">
                                        <resource.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-gray-900 leading-snug">{resource.title}</h5>
                                        <p className="text-xs text-gray-500 mt-1">{resource.type} • {resource.size}</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 border border-gray-200 bg-white text-xs font-bold text-gray-600 rounded-lg hover:bg-[#0071B2] hover:text-white hover:border-[#0071B2] transition-all flex items-center justify-center gap-2">
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Optional: Newsletter or secondary box could go here */}
                    <div className="bg-gradient-to-br from-[#0071B2] to-[#00C2CB] rounded-2xl p-6 text-white shadow-md">
                        <h4 className="font-bold text-lg mb-2">Weekly Newsletter</h4>
                        <p className="text-sm text-blue-100 mb-4">Get the latest maritime news delivered to your inbox.</p>
                        <button className="w-full py-2.5 bg-white text-[#0071B2] font-bold rounded-lg text-sm hover:bg-blue-50 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resources;