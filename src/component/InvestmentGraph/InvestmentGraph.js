import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const InvestmentGraph = ({ data }) => {
    return (
        <div>
            <BarChart width={500} height={300} data={data}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="investment" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default InvestmentGraph;