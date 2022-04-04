import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    return (
        <div>
            <h3>All Reviews Here</h3>
            <div>
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