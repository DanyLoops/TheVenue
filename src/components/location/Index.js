import React from 'react';

const Location = () => {
    return (
       <div className="location_wrapper">

         <iframe title= "map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.654416454874!2d-99.0998646!3d19.4053359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2a19a4361b56cd2!2sPalacio+de+los+Deportes!5e0!3m2!1ses-419!2sus!4v1563318908021!5m2!1ses-419!2sus" width="100%" height="500px" frameBorder={0} allowFullScreen/>

       


             <div className="location_tag">
                 <div>Location</div>
             </div>
       </div>
    );
};

export default Location;

