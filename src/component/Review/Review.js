import React from 'react';

const Review = ({review}) => {
    const {name,reviews,ratings} = review
    return (
        <div className='border-2 p-3'>
            <h3 className=''>{name}</h3>
            <div>
                <p>
                    <span className='mr-3'>{ratings}</span> 
                    {reviews}
                </p>
            </div>
        </div>
    );
};

export default Review;