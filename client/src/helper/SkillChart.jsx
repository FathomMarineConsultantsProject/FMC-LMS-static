import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

const data = [
    { subject: 'Navigation', A: 120, fullMark: 150 },
    { subject: 'Safety', A: 98, fullMark: 150 },
    { subject: 'Communication', A: 86, fullMark: 150 },
    { subject: 'Engineering', A: 99, fullMark: 150 },
    { subject: 'Compliance', A: 85, fullMark: 150 },
    { subject: 'Leadership', A: 65, fullMark: 150 },
];

const SkillChart = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Competency Radar</h3>
            
            <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        {/* The Grid (Web) */}
                        <PolarGrid stroke="#e5e7eb" />
                        
                        {/* The Labels (Navigation, Safety, etc.) */}
                        <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }} 
                        />
                        
                        {/* The Axis Scale (0, 50, 100, 150) - Hidden for cleaner look */}
                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                        
                        {/* The Radar Shape */}
                        <Radar
                            name="Proficiency"
                            dataKey="A"
                            stroke="#0E6973" // Dark Teal from your palette
                            strokeWidth={3}
                            fill="#118C8C"   // Teal fill
                            fillOpacity={0.5}
                        />
                        
                        {/* Tooltip on hover */}
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            itemStyle={{ color: '#0E6973', fontWeight: 'bold' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            
            {/* Footer / Legend */}
            <div className="mt-4 text-center text-sm text-gray-500">
                Current proficiency level across key maritime domains.
            </div>
        </div>
    );
};

export default SkillChart;