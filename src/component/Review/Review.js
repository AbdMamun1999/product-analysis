import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    const { image, name, reviews, ratings } = review
    return (
        <div className='border-2 p-3 rounded h-[340px]'>
            <img src={image} alt="" className='w-[23%] h-[30%] rounded-[50%] mx-auto' />
            <h3 className='text-center text-xl'>{name}</h3>
            <p>
                <small>Ratings: {ratings} out of 5</small>
            </p>
            <p className='text-[16px]'>
                {reviews}
            </p>
        </div>
    );
};

export default Review;