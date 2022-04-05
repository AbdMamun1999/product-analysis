import React from 'react';
import BannerImage from '../BannerImage/BannerImage';
import BannerTitle from '../BannerTitle/BannerTitle';

const Banner = () => {
    return (
        <div className='flex lg:flex-row col'>
            <BannerTitle></BannerTitle>
            <BannerImage></BannerImage>
        </div>
    );
};

export default Banner;