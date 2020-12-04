import React from 'react';

const NavbarPage = (props)=>{

    return (
        <div className="">
            <img 
             width={60}
             height={60}
            className="" 
            alt="logo"  
            src={process.env.PUBLIC_URL + 'LandingPageImages/bonVoyageLogo.png'} 
            />
        </div>
    )
}

export default NavbarPage;