import React from 'react'


const ImageLarge = ()=>{
    return (
        <div>
            <img 
            alt="traveler" 
            src={process.env.PUBLIC_URL + 'LandingPageImages/backpacking-hongkong.jpg'} 
            className=" "
            width="490"
            height= "390"
            />
        </div>
    )
}

export default ImageLarge