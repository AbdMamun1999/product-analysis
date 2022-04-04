import React, { useEffect, useState } from 'react';
import GraphOfSell from '../GraphOfSell/GraphOfSell';

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
        </div>
    );
};

export default Chart;