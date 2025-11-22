import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    } from 'recharts';
    import { Clock } from 'lucide-react';

    const COLORS = {
    userBlue: '#0071B2',
    idealCyan: '#00C2CB',
    gridGray: '#F3F4F6',
    textGray: '#9CA3AF',
    };

    const data = [
    { course: 'Marine Eng.', userTime: 12, idealTime: 10 },
    { course: 'Safety', userTime: 7, idealTime: 8 },
    { course: 'Navigation', userTime: 15, idealTime: 14 },
    { course: 'Maritime Law', userTime: 9, idealTime: 12 },
    { course: 'Comms', userTime: 6, idealTime: 5 },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
    if (active && Array.isArray(payload) && payload.length >= 2) {
        return (
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-sm">
            <p className="font-bold text-gray-900 mb-2">{label}</p>
            <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full" style={{ background: COLORS.userBlue }} />
            <span className="text-gray-500">You:</span>
            <span className="font-bold text-gray-900">{payload[0].value}h</span>
            </div>
            <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: COLORS.idealCyan }} />
            <span className="text-gray-500">Ideal:</span>
            <span className="font-bold text-gray-900">{payload[1].value}h</span>
            </div>
        </div>
        );
    }
    return null;
    };

    const TimeTaken = () => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
            <div>
            <h3 className="text-xl font-bold text-gray-900">Course Completion Pace</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Your speed vs. recommended duration</p>
            </div>
            <div className="p-2 bg-[#E0F7FA] rounded-xl text-[#0071B2]">
            <Clock className="w-5 h-5" />
            </div>
        </div>

        {/* Chart Container - give ResponsiveContainer an explicit px height */}
        <div className="w-full" style={{ minHeight: 400 }}>
            <ResponsiveContainer width="100%" height={350}>
            <BarChart
                data={data}
                margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                barGap={8}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLORS.gridGray} />
                <XAxis
                dataKey="course"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: COLORS.textGray, fontWeight: 500 }}
                dy={1}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: COLORS.textGray, fontWeight: 500 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F9FAFB' }} />
                <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px', fontSize: '12px', fontWeight: 500 }} />
                <Bar dataKey="userTime" name="Your Time" fill={COLORS.userBlue} radius={[4, 4, 4, 4]} barSize={20} animationDuration={1500} />
                <Bar dataKey="idealTime" name="Ideal Time" fill={COLORS.idealCyan} radius={[4, 4, 4, 4]} barSize={20} animationDuration={1500} />
            </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default TimeTaken;
