import React from 'react';
import Carousel from './Carousel';
import TimeUtil from './TimeUtil';


const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carousel/>
            
            
            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana Grande
                </div>

            </div>

          <TimeUtil/>

        

        </div>
    );
};

export default Featured;