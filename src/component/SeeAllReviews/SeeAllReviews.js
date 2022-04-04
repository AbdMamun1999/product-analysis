import React from 'react';
import { useNavigate } from 'react-router-dom';

const SeeAllReviews = () => {
    const navigate = useNavigate()
    const seeAllReviewsHandler = () =>{
        const path = `/reviews`
        navigate(path)
    }
    return (        
        <div className='text-center'>
            <button onClick={seeAllReviewsHandler} className='bg-slate-300 p-3 rounded-sm mt-4'>See All Reviews</button>
        </div>
    );
};

export default SeeAllReviews;       