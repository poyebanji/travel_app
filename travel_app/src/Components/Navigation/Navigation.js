import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap'

const Navigation = ({onRouteChange, isSignedIn}) => {
if(isSignedIn){
  return(
    <React.Fragment>
<Navbar bg="primary" variant="dark">
<Navbar.Brand onClick = {()=>onRouteChange('signin')}>Logo</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link onClick = {()=>onRouteChange('home')} >Home</Nav.Link>
<Nav.Link onClick = {()=>onRouteChange('learnMore')} >Learn More</Nav.Link>
<Nav.Link onClick = {()=>onRouteChange('profile')} >Profile</Nav.Link>
</Nav>
<Nav >
{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
<Nav.Link onClick = {()=>onRouteChange('contact')}  variant="outline-info">Contact us</Nav.Link>     
</Nav>
<Button onClick = {()=>onRouteChange('signout')}  variant="outline-info">Signout</Button>
</Navbar>      
</React.Fragment>
  )
} else {
  return(
    <React.Fragment>
<Navbar bg="primary" variant="dark">
<Navbar.Brand onClick = {()=>onRouteChange('signin')}>Logo</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link onClick = {()=>onRouteChange('signout')} >Home</Nav.Link>
<Nav.Link onClick = {()=>onRouteChange('learnMore')} >Learn More</Nav.Link>
{/* <Nav.Link onClick = {()=>onRouteChange('profile')} >Profile</Nav.Link> */}
</Nav>
<Nav >
{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
<Nav.Link onClick = {()=>onRouteChange('contact')}  variant="outline-info">Contact us</Nav.Link>     
</Nav>
<Button onClick = {()=>onRouteChange('signin')}  variant="outline-info">Signin</Button>
</Navbar>      
</React.Fragment>
  )
  
}
 


  
    
};

export default Navigation;