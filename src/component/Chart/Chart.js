import React, { useEffect, useState } from 'react';
import GraphOfSell from '../GraphOfSell/GraphOfSell';
import InvestmentGraph from '../InvestmentGraph/InvestmentGraph';
import RevenueGraph from '../RevenueGraph/RevenueGraph';

const Chart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='grid lg:grid-cols-2 gap-x-10 gap-y-20 w-4/5 mx-auto justify-center'>
            <div>
                <h3 className='text-center my-3'>Sell Graph</h3>
                <GraphOfSell
                    data={data}
                ></GraphOfSell>
            </div>
            <div>
                <h3 className='text-center my-3'>Revenue Graph</h3>
                <RevenueGraph
                    data={data}
                ></RevenueGraph>
            </div>
            <div>
                <h3 className='text-center my-3'>Investment Graph</h3>
                <InvestmentGraph
                    data={data}
                ></InvestmentGraph>
            </div>

        </div>
    );
};

export default Chart;