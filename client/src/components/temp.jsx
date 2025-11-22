import React, {useState} from 'react';
import { 
    Play, Lock, CheckCircle, Clock, Star, Share2, 
    MessageCircle, FileText, ChevronDown, ChevronUp, User,
    Download, Layout, Monitor, Shield, ThumbsUp, Award
} from 'lucide-react';

// --- MOCK DATA ---
const courseData = {
    title: "Maritime Safety and Security Protocols",
    category: "Safety Training",
    rating: 4.8,
    reviewsCount: 126,
    lessons: 12,
    duration: "4h 30min",
    author: {
        name: "Capt. John Smith",
        role: "Senior Safety Officer",
        rating: 4.9,
        bio: "Capt. Smith has over 20 years of experience in maritime safety and has led safety training for major shipping lines globally."
    },
    sections: [
        {
            id: 1,
            title: "01: Introduction to Maritime Safety",
            duration: "22min",
            isOpen: true,
            lessons: [
                { 
                    id: 101,
                    title: "Course Overview", 
                    time: "2 min", 
                    isCompleted: true, 
                    isLocked: false,
                    videoUrl: "https://drive.google.com/file/d/1x-ze--ByRlJgIW1OdSpVLC1eVKI_Huzv/preview" 
                },
                { 
                    id: 102,
                    title: "Safety Culture at Sea", 
                    time: "5 min", 
                    isCompleted: true, 
                    isLocked: false,
                    videoUrl: "https://drive.google.com/file/d/1mpyLTRXY6qNrK5PSxCXqFD_6BC5RJsmO/view?usp=drive_link" 
                },
                { 
                    id: 103,
                    title: "Understanding SOLAS", 
                    time: "12 min", 
                    isCompleted: false, 
                    isLocked: false,
                    videoUrl: "https://drive.google.com/file/d/1x-ze--ByRlJgIW1OdSpVLC1eVKI_Huzv/preview" 
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
        comment: "Excellent breakdown of the SOLAS regulations. The practical examples really helped clarify the complex legal requirements."
    },
    {
        id: 2,
        user: "Mike Ross",
        role: "Cadet",
        rating: 4,
        date: "1 week ago",
        comment: "Great content, but I wish there were more interactive quizzes in the first module. The instructor is very clear though."
    },
    {
        id: 3,
        user: "Elena Rodriguez",
        role: "Safety Manager",
        rating: 5,
        date: "2 weeks ago",
        comment: "A must-watch for any safety officer. The section on risk assessment was particularly insightful."
    }
];

const temp = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [expandedSection, setExpandedSection] = useState({1:true});
    const [currentVideo, setCurrentVideo] = useState(courseData.section[0].lessons[0].videoUrl);
    const [currentLessonTitle,setCurrentLessonTitle] = useState(courseData.section[0].lessons[0].title);
    
    const toggleSection(id)=>{
        setExpandedSection((prev)=>({...prev,[id]: !prev[id]}));
    };

    const handleLessonSelect = (lesson)=>{
    }
    return (
        <div>
            {/*Header*/} 
            <div>
                <div>
                    <span>{courseData.category}</span>
                    <span>{courseData.rating} ({courseData.reviewCount} reviews)</span>
                </div>
                <h1>{courseData.title}</h1>
                <div>
                    <span><Play/>{courseData.lessons}</span>
                    <span><Clock/>{courseData.duration}</span>
                </div>
                <div>
                    <button><Share2/> Share</button>
                    <button>Enroll Now</button>
                </div>
            </div>
            {/*Main Layout*/}
            <div>
                {/*Left content*/}
                <div>
                    {/*Video*/}
                    <div>
                        <div>Now Playing: {currentLessonTitle}</div>
                        <iframe
                            src={currentVideo}
                            width="100%"
                            height="400"
                            allow='autoplay; fullscreen'
                            title='Course Video'
                        ></iframe>
                    </div>
                    {/*Tabs*/}
                    <div>
                        {["Overview", "Author", "Resources", "Reviews"].map((tab)=>(
                            <button key={tab} onClick={()=> setActiveTab(tab)}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    {/*Tab Content*/}
                    <div>
                        {activeTab === 'Overview' && (
                            <div>
                                <h3>About Course</h3>
                                <p>
                                    This comprehensive course covers essential maritime safety protocols...
                                </p>
                                <h3>What you'll learn</h3>
                                <ul>
                                    <li>Master SOLAS & MARPOL regulations</li>
                                    <li>Conduct effective safety drills</li>
                                    <li>Risk Assessment techniques</li>
                                    <li>Emergency communication protocols</li>
                                    <li>Firefighting & survival strategies</li>
                                    <li>ISPS Code implementation</li>
                                </ul>
                            </div>
                        )}
                        {activeTab ==='Author' && (
                            <div>
                                <User/>
                                <h4>{courseData.author.name}</h4>
                                <p>{courseData.author.role}</p>
                                <p>{courseData.author.bio}</p>
                            </div>
                        )}
                        {activeTab=== 'Resources' && (
                            <div>
                                <h3>Downloadable Materials</h3>
                                <ul>
                                    <li>Safety Checklist Template.pdf <Download /></li>
                                    <li>SOLAS Summary Guide.pdf <Download /></li>
                                    <li>Emergency Drill Logbook.xlsx <Download /></li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'Reviews' && (
                            <div>
                                <h3>Student Reviews</h3>
                                {reviews.map(review => (
                                    <div key={review.id}>
                                        <h4>{review.user} ({review.role})</h4>
                                        <p>{review.comment}</p>
                                        <span>{review.date}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/*Right column for syllabus*/}
                <div>
                    <h3>Course content</h3>
                    {courseData.section.map(section => (
                        <div key={section.id}>
                            <button onClick={()=> toggleSection(section.id)}>
                                {section.title}-{section.duration}
                            </button>
                            {}
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default temp;