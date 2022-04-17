import React from 'react';
import banner from '../../../banner/banner.mp4'

const Banner = () => {
    return (
        <div>
            <video src={banner} type='video/mp4' autoPlay></video>
        </div>
        
    );
};

export default Banner;