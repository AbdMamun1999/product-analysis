import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import SeeAllReviews from '../SeeAllReviews/SeeAllReviews';

const CustomerReviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    const reviewsSlice = reviews.slice(0,3)

    return (
        <div>
            <h3 className='text-xl text-center mb-8 font-bold'>Customer Reviews</h3>
            <div className='grid grid-cols-3 gap-5'>
                {
                    reviewsSlice.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            <SeeAllReviews></SeeAllReviews>
        </div>
    );
};

export default CustomerReviews;