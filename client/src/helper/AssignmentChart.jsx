import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// --- PALETTE ---
const COLORS = {
    yellow: '#FFD900', // Pending
    green: '#00E099',  // Submitted
    blue: '#0071B2',   // Graded
};

const AssignmentChart = () => {

    const segments = [
        ...Array(4).fill({ name: 'Pending', color: COLORS.yellow }), 
        ...Array(6).fill({ name: 'Submitted', color: COLORS.green }),
        ...Array(14).fill({ name: 'Graded', color: COLORS.blue }),
    ];

    // Add a value of 1 to each segment so they are all equal size
    const data = segments.map((seg, index) => ({ ...seg, value: 1, key: index }));

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between h-full transition-all hover:shadow-md">
            
            {/* --- Left Side: Legend --- */}
            <div className="flex flex-col justify-center space-y-6 w-full sm:w-1/2 mb-6 sm:mb-0">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assignment Breakdown</h3>
                
                {/* Legend Items */}
                <div className="space-y-4">
                    {/* Pending */}
                    <div className="flex items-center group">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FFD900] mr-3 shadow-sm ring-2 ring-white"></span>
                        <div>
                            <span className="font-bold text-gray-900 text-lg mr-1.5">12</span>
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide group-hover:text-[#FFD900] transition-colors">Pending</span>
                        </div>
                    </div>

                    {/* Submitted */}
                    <div className="flex items-center group">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#00E099] mr-3 shadow-sm ring-2 ring-white"></span>
                        <div>
                            <span className="font-bold text-gray-900 text-lg mr-1.5">43</span>
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide group-hover:text-[#00E099] transition-colors">Submitted</span>
                        </div>
                    </div>

                    {/* Graded */}
                    <div className="flex items-center group">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#0071B2] mr-3 shadow-sm ring-2 ring-white"></span>
                        <div>
                            <span className="font-bold text-gray-900 text-lg mr-1.5">456</span>
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide group-hover:text-[#0071B2] transition-colors">Graded</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Right Side: Segmented Gauge Chart --- */}
            <div className="relative w-full sm:w-1/2 h-[200px] flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="70%" // Move center down to create semi-circle effect
                            startAngle={180}
                            endAngle={0}
                            innerRadius={65}
                            outerRadius={90}
                            paddingAngle={3} // Creates the "gaps" between segments
                            dataKey="value"
                            cornerRadius={3} 
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Overlay Text */}
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                    <p className="text-4xl font-extrabold text-gray-900 tracking-tight">86%</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-1">Completed</p>
                </div>
            </div>
        </div>
    );
};

export default AssignmentChart;