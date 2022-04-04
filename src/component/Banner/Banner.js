import React from 'react';
import BannerImage from '../BannerImage/BannerImage';
import BannerTitle from '../BannerTitle/BannerTitle';

const Banner = () => {
    return (
        <div className='flex'>
            <BannerTitle></BannerTitle>
            <BannerImage></BannerImage>
        </div>
    );
};

export default Banner;