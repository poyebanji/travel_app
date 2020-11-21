import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap'

const Navigation = ({onRouteChange}) => {
    return (
        <React.Fragment>
      
            {/* <div onClick = {()=>onRouteChange('signin')}> Sign In</div>
            <div onClick = {()=>onRouteChange('signout')}> Sign Out</div> */}
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Logo</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick = {()=>onRouteChange('signout')} href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#dealoftheday">Deal of the Day</Nav.Link>
    </Nav>
    <Nav inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Nav.Link href="#contactus">Contact us</Nav.Link>
      <Button onClick = {()=>onRouteChange('signin')} variant="outline-info">Signin</Button>
    </Nav>
  </Navbar>

      
            
        </React.Fragment>
    );
};

export default Navigation;