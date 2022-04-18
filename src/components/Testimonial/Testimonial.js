import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Testimonial = () => {
    return (
        <div>
             <Carousel>
        <div>
          <div className='bg-blue-300 h-[200px] grid'>
              <p>name</p>
              <p>dfhdjhssdfsfd</p>
          </div>
        </div>
        <div>
        <div className='bg-blue-300 h-[200px] '>
              <p>name</p>
              <p>dfhdjhssdfsfd</p>
          </div>
        </div>
        <div>
        <div className='bg-blue-300 h-[200px]'>
              <p>name</p>
              <p>dfhdjhssdfsfd</p>
          </div>
        </div>
      </Carousel>
        </div>
    );
};

export default Testimonial;