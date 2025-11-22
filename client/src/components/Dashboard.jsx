import { ArrowRight, Clock } from 'lucide-react'
import React from 'react'
import TimeSpentChart from '../helper/TimeSpentChart'
import AssignmentChart from '../helper/AssignmentChart'
import { BookOpen } from 'lucide-react'; 
import SkillChart from '../helper/SkillChart'
import Dashboard1 from '../helper/Dashboard1';
import TimeTaken from '../helper/TimeTaken';
const cards=[
    {
        title: "Course Enrolled",
        value: "27",
        linkText: "Explore and continue learning from your current courses.",
    },
    {
        title: "Total Assignment",
        value: "45",
        linkText: "View Assignments",
    },
    {
        title: "Completed Courses",
        value: "463", 
        linkText: "View Milestones",
    },
    {
        title: "Daily Average Time Spent",
        value: "02:34:12",
        linkText: "View Spent History",
    }
];

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {cards.map((card,index)=>(
                <div key={index}
                className={`p-6 rounded-lg shadow-md flex flex-col justify-between h-48
                            bg-white text-gray-900
                            hover:bg-linear-to-br hover:from-[#1B4965] hover:to-[#5FA8D3]
                            hover:text-white`}>
                    {/**card content */}
                    <div className='flex-1'>
                        <p className='text-sm font-medium'>
                            {card.title}
                        </p>
                        <p className={`text-4xl font-bold mt-2 ${card.value.length > 5 ? 'text-3xl' : ''}`}>
                            {card.value}
                        </p>
                    </div>
                    {/**Card footer */}
                    <div>
                        <a
                            href='#'
                            className='flex items-center justify-between text-sm font-medium
                            text-[#0E6973]
                            hover:text-[#118C8C]
                            transition-colors duration-200'
                        >
                            <span className='font-black'>{card.linkText}</span>
                            <ArrowRight className='w-4 h-4'/>
                        </a>
                    </div>
                </div>
            ))}
                
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10'>
                <div className='lg:col-span-3 h-full min-h-[400px]'>
                    <TimeSpentChart/>
                </div>
                <div className='lg:col-span-2 flex flex-col gap-8'>
                    <div className='h-auto'>
                        <AssignmentChart/>
                    </div>
                    <div className='flex-1 min-h-[300px]'>
                        <SkillChart/>
                    </div>   
                </div>
                
            </div>
            <TimeTaken/>
            <Dashboard1/>
        </div>
    )
}

export default Dashboard