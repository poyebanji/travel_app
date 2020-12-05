import React from 'react';

const NavbarPage = (props)=>{

    return (
        <div className="">
            <img 
             width={100}
             height={100}
            className="" 
            alt="logo"  
            src={process.env.PUBLIC_URL + 'LandingPageImages/bonVoyageLogo.png'} 
            />
        </div>
    )
}

export default NavbarPage;