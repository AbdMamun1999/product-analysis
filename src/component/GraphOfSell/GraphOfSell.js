import React from 'react';
import {  Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const GraphOfSell = ({ data }) => {
    return (
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
    );
};

export default GraphOfSell;