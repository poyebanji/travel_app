import React from 'react';

const Navbar = (props)=>{

    return (
        <div className="navbar-main">
            <img className="logo-main" alt="logo"  src={process.env.PUBLIC_URL + 'LandingPageImages/bonVoyageLogo.png'} />
        </div>
    )
}

export default Navbar