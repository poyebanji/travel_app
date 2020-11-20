import React from 'react';
// import {Container} from 'react-bootstrap'

const Navigation = ({onRouteChange}) => {
    return (
        <React.Fragment>
        <nav>
            <div onClick = {()=>onRouteChange('signin')}> Sign In</div>
            <div onClick = {()=>onRouteChange('signout')}> Sign Out</div>

        </nav>
            
        </React.Fragment>
    );
};

export default Navigation;