import React from 'react';
import BannerImage from '../BannerImage/BannerImage';
import BannerTitle from '../BannerTitle/BannerTitle';

const Banner = () => {
    return (
        <div className='flex h-4/5	'>
            <BannerTitle></BannerTitle>
            <BannerImage></BannerImage>
        </div>
    );
};

export default Banner;