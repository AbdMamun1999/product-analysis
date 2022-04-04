import React, { useEffect, useState } from 'react';
import GraphOfSell from '../GraphOfSell/GraphOfSell';
import RevenueGraph from '../RevenueGraph/RevenueGraph';

const Chart = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <GraphOfSell
                data={data}
            ></GraphOfSell>
            <RevenueGraph
                data={data}
            ></RevenueGraph>
        </div>
    );
};

export default Chart;