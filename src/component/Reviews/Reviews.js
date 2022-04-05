import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    return (
        <div>
            <h3 className='text-2xl text-center my-5'>All Reviews Here</h3>
            <div className='w-4/5 mx-auto grid lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;