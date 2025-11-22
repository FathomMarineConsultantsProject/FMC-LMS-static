import React from 'react';
import { 
    Award, Download, Clock, PlayCircle, CheckCircle, 
    FileText, Shield, Anchor, Navigation 
} from 'lucide-react';

// --- PALETTE ---
// Blue: #0071B2
// Cyan: #00C2CB
// Green: #00E099
// Yellow: #FFD900
// Pink: #FF0055

// --- MOCK DATA ---

const earnedCertifications = [
    {
        id: 1,
        title: "Marine Safety Fundamentals",
        score: "95%",
        issued: "May 15, 2024",
        expires: "May 15, 2025",
        certId: "MSF-2024-001234",
        icon: Shield,
        iconBg: "bg-[#E0F7FA]", // Light Cyan
        iconColor: "text-[#0071B2]" // Blue
    },
    {
        id: 2,
        title: "Ship Maintenance Professional",
        score: "88%",
        issued: "April 22, 2024",
        expires: "April 22, 2026",
        certId: "SMP-2024-005678",
        icon: Anchor,
        iconBg: "bg-[#FFF0F5]", // Light Pink
        iconColor: "text-[#FF0055]" // Pink
    },
    {
        id: 3,
        title: "Environmental Marine Practices",
        score: "92%",
        issued: "March 10, 2024",
        expires: "March 10, 2025",
        certId: "EMP-2024-009012",
        icon: Award,
        iconBg: "bg-[#00E099]/10", // Light Green
        iconColor: "text-[#00E099]" // Green
    }
];

const inProgressCertifications = [
    {
        id: 1,
        title: "Advanced Navigation Systems",
        completed: 6,
        total: 8,
        percentage: 75,
        timeLeft: "2 weeks",
        icon: Navigation,
        iconBg: "bg-[#FFFDE7]", // Light Yellow
        iconColor: "text-[#FFD900]" // Yellow
    },
    {
        id: 2,
        title: "Maritime Law Specialist",
        completed: 9,
        total: 10,
        percentage: 90,
        timeLeft: "3 days",
        icon: FileText,
        iconBg: "bg-[#E0F7FA]",
        iconColor: "text-[#0071B2]"
    }
];

const availableCertifications = [
    {
        id: 1,
        title: "Cargo Operations Expert",
        level: "Advanced",
        levelColor: "bg-[#FF0055]/10 text-[#FF0055]", // Pink for Advanced
        duration: "14 weeks",
        prerequisites: "Marine Engineering"
    },
    {
        id: 2,
        title: "Marine Communication Officer",
        level: "Intermediate",
        levelColor: "bg-[#FFD900]/20 text-[#B29700]", // Yellow for Intermediate
        duration: "8 weeks",
        prerequisites: "Basic Navigation"
    }
];

const Certification = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-12">
            
            {/* --- Header --- */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Certifications</h1>
                <p className="text-gray-500 mt-2">Track and manage your professional certifications</p>
            </div>

            {/* --- 1. Earned Certifications --- */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Award className="w-5 h-5 text-[#00E099]" />
                    <h3 className="text-xl font-bold text-gray-900">Earned Certifications</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {earnedCertifications.map((cert) => (
                        <div key={cert.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00E099] transition-all flex flex-col h-full group">
                            {/* Icon Header */}
                            <div className="flex justify-center mb-6">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${cert.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                    <cert.icon className={`w-10 h-10 ${cert.iconColor}`} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title & Score */}
                            <div className="text-center mb-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 h-14 flex items-center justify-center">{cert.title}</h4>
                                <span className="inline-block px-3 py-1 bg-[#0071B2] text-white text-xs font-bold rounded-md shadow-sm">
                                    Score: {cert.score}
                                </span>
                            </div>

                            {/* Details Table */}
                            <div className="space-y-3 text-sm text-gray-600 mb-8 flex-1">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Issued:</span>
                                    <span className="font-medium">{cert.issued}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Expires:</span>
                                    <span className="font-medium">{cert.expires}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">ID:</span>
                                    <span className="font-medium font-mono text-xs">{cert.certId}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full py-2.5 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:text-[#0071B2] hover:border-[#0071B2] transition-all flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 2. In Progress --- */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-[#FF0055]" />
                    <h3 className="text-xl font-bold text-gray-900">In Progress</h3>
                </div>

                <div className="space-y-6">
                    {inProgressCertifications.map((cert) => (
                        <div key={cert.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}>
                                    <cert.icon className={`w-8 h-8 ${cert.iconColor}`} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 w-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-gray-900">{cert.title}</h4>
                                        <span className="text-lg font-bold text-[#0071B2]">{cert.percentage}%</span>
                                    </div>
                                    
                                    <p className="text-sm text-gray-500 mb-4">
                                        {cert.completed} of {cert.total} modules completed
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3">
                                        <div 
                                            className="h-full rounded-full bg-[#0071B2] transition-all duration-1000" 
                                            style={{ width: `${cert.percentage}%` }}
                                        ></div>
                                    </div>

                                    <p className="text-xs text-gray-400">Estimated completion: {cert.timeLeft}</p>
                                </div>

                                {/* Button */}
                                <button className="w-full md:w-auto px-8 py-3 bg-[#0071B2] text-white font-bold rounded-xl hover:bg-[#005f96] transition-colors shadow-sm flex items-center justify-center gap-2">
                                    Continue
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 3. Available Certifications --- */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-1 bg-gray-100 rounded">
                         <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Available Certifications</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {availableCertifications.map((cert) => (
                        <div key={cert.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#00C2CB] transition-all flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-lg font-bold text-gray-900">{cert.title}</h4>
                                <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${cert.levelColor}`}>
                                    {cert.level}
                                </span>
                            </div>

                            <div className="space-y-2 mb-8 flex-1">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <span>Duration: {cert.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <FileText className="w-4 h-4 text-gray-400" />
                                    <span>Prerequisites: {cert.prerequisites}</span>
                                </div>
                            </div>

                            <button className="w-full py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:text-[#0071B2] hover:border-[#0071B2] transition-all flex items-center justify-center gap-2 group">
                                <PlayCircle className="w-4 h-4 text-gray-400 group-hover:text-[#0071B2] transition-colors" />
                                Start Certification
                            </button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Certification;