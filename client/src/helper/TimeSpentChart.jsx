import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import { ArrowUpRight } from 'lucide-react';

// --- PALETTE ---
const COLORS = {
    blue: '#0071B2',      // Active Tab Text
    lightCyan: '#08a696', // Bar Color
    hoverCyan: '#00C2CB', // Bar Hover Color
};

// --- Data ---
const dataDaily = [
    { label: "0:00", hours: 1.8 },
    { label: "3:00", hours: 2.4 },
    { label: "6:00", hours: 3.1 },
    { label: "9:00", hours: 2.7 },
    { label: "12:00", hours: 4.0 },
    { label: "15:00", hours: 3.2 },
    { label: "18:00", hours: 2.6 },
    { label: "21:00", hours: 1.9 }
];

const dataWeekly = [
    { label: 'Mon', hours: 3.0 },
    { label: 'Tue', hours: 1.5 },
    { label: 'Wed', hours: 3.8 },
    { label: 'Thu', hours: 2.5 },
    { label: 'Fri', hours: 4.2 },
    { label: 'Sat', hours: 3.5 },
    { label: 'Sun', hours: 0.8 },
];

const dataMonthly = [
    { label: 'Jan', hours: 32 },
    { label: 'Feb', hours: 28 },
    { label: 'Mar', hours: 36 },
    { label: 'Apr', hours: 30 },
    { label: 'May', hours: 42 },
    { label: 'Jun', hours: 38 },
    { label: 'Jul', hours: 44 },
    { label: 'Aug', hours: 40 },
    { label: 'Sep', hours: 34 },
    { label: 'Oct', hours: 28 },
    { label: 'Nov', hours: 30 },
    { label: 'Dec', hours: 22 },
];

// --- Custom Tooltip ---
const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;
    
    const data = payload[0].payload;

    return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
            <p className="text-sm font-bold text-gray-700">{data.hours} hours</p>
        </div>
    );
};

const TimeSpentChart = () => {
    const [activeTabs, setActiveTabs] = useState("Weekly");

    const getData = () => {
        if (activeTabs === "Daily") return dataDaily;
        if (activeTabs === "Monthly") return dataMonthly;
        return dataWeekly;
    };

    const data = getData();
    
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
            {/* Title Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Time Spent Analytics</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Your learning activity</p>
                </div>
                <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
            </div>

            {/* Tab Controls */}
            <div className="flex bg-gray-50 p-1.5 rounded-xl mb-8">
                {['Daily', 'Weekly', 'Monthly'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTabs(tab)}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-200
                            ${activeTabs === tab 
                                ? 'bg-white shadow-sm text-[#0071B2]' 
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Chart Area */}
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
                        <XAxis 
                            dataKey="label" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 12, fill: '#9CA3AF', fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize:12, fill: '#9CA3AF', fontWeight: 500 }}
                        />
                        <Tooltip 
                            content={<CustomTooltip />} 
                            cursor={{ fill: 'transparent' }}
                        />
                        <Bar dataKey="hours" radius={[8, 8, 8, 8]} animationDuration={1000}>
                            {data.map((entry, index) => (
                                <Cell 
                                    key={index} 
                                    fill={COLORS.lightCyan} // All bars are Light Cyan
                                    className="hover:opacity-80 transition-opacity duration-200"
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TimeSpentChart;