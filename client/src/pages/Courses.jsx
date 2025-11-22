import React from 'react';
import { Search, ChevronDown, Star, Users, Clock, Ship, LifeBuoy, Compass, Waves, Package, Radio } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const coursesList = [
    {
        id: 1,
        title: "Advanced Marine Engineering",
        author: "Capt. John Smith",
        rating: 4.8,
        students: 234,
        duration: "12 weeks",
        category: "Engineering",
        level: "Advanced",
        icon: Ship,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
        levelColor: "bg-red-50 text-red-600", // Advanced
        isEnrolled: false
    },
    {
        id: 2,
        title: "Maritime Safety and Security",
        author: "Dr. Sarah Johnson",
        rating: 4.9,
        students: 456,
        duration: "8 weeks",
        category: "Safety",
        level: "Intermediate",
        icon: LifeBuoy,
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        levelColor: "bg-orange-50 text-orange-600", // Intermediate
        isEnrolled: true
    },
    {
        id: 3,
        title: "Ship Navigation Techniques",
        author: "Lt. Michael Brown",
        rating: 4.7,
        students: 189,
        duration: "6 weeks",
        category: "Navigation",
        level: "Beginner",
        icon: Compass,
        iconBg: "bg-yellow-50",
        iconColor: "text-yellow-600",
        levelColor: "bg-green-50 text-green-600", // Beginner
        isEnrolled: false
    },
    {
        id: 4,
        title: "Marine Environmental Protection",
        author: "Dr. Lisa Wang",
        rating: 4.6,
        students: 312,
        duration: "10 weeks",
        category: "Environment",
        level: "Intermediate",
        icon: Waves,
        iconBg: "bg-teal-50",
        iconColor: "text-teal-500",
        levelColor: "bg-orange-50 text-orange-600",
        isEnrolled: false
    },
    {
        id: 5,
        title: "Cargo Operations Management",
        author: "Eng. Robert Davis",
        rating: 4.8,
        students: 178,
        duration: "14 weeks",
        category: "Operations",
        level: "Advanced",
        icon: Package,
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
        levelColor: "bg-red-50 text-red-600",
        isEnrolled: true
    },
    {
        id: 6,
        title: "Maritime Communication Systems",
        author: "Prof. Emily Chen",
        rating: 4.5,
        students: 267,
        duration: "5 weeks",
        category: "Technology",
        level: "Beginner",
        icon: Radio,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        levelColor: "bg-green-50 text-green-600",
        isEnrolled: false
    }
];

const categories = [
    "All Categories", "Engineering", "Safety", "Navigation", "Environment", "Operations", "Technology"
];

const Courses = () => {
    const navigate = useNavigate();
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
                <p className="text-gray-500 mt-2">Explore and enroll in courses to advance your maritime knowledge</p>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search courses..." 
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] transition-all bg-white"
                    />
                </div>
                
                {/* Category Filter Dropdown */}
                <div className="relative min-w-[200px]">
                    <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071B2]/20 focus:border-[#0071B2] cursor-pointer">
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesList.map((course) => (
                    <div key={course.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#00C2CB] transition-all duration-300 flex flex-col h-full group">
                        
                        {/* Course Icon/Thumbnail Area */}
                        <div className={`h-40 ${course.iconBg} flex items-center justify-center relative group-hover:bg-opacity-80 transition-colors`}>
                            <course.icon className={`w-16 h-16 ${course.iconColor}`} strokeWidth={1.5} />
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex-1 flex flex-col">
                            {/* Tags */}
                            <div className="flex justify-between items-center mb-3">
                                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md border border-gray-200">
                                    {course.category}
                                </span>
                                <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${course.levelColor}`}>
                                    {course.level}
                                </span>
                            </div>

                            {/* Title and Author */}
                            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 min-h-[56px]">{course.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">by {course.author}</p>

                            {/* Stats Row */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pb-6 border-b border-gray-100">
                                <div className="flex items-center gap-1 text-orange-500 font-semibold">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>{course.rating}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-4 h-4" />
                                    <span>{course.students}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    <span>{course.duration}</span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-6">
                                {course.isEnrolled ? (
                                    <button disabled className="w-full py-3 bg-gray-100 text-gray-400 font-bold rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        Already Enrolled
                                    </button>
                                ) : (
                                    <button className="w-full py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm hover:shadow-md"
                                    onClick={()=>navigate(`/courseId`)}>
                                        Enroll Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper icon needed for the disabled button
import { BookOpen } from 'lucide-react';

export default Courses;