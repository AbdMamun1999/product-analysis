import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const RevenueGraph = ({ data }) => {
    return (
            <AreaChart width={500} height={300} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}  >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
    );
};

export default RevenueGraph;