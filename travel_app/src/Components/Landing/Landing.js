import React from 'react'
import {Container,Button} from 'react-bootstrap'
import Footer from './../Footer/Footer'


const Landing = ()=> {

    return (
<Container> 
    I am Landing Page
    <div>LOGO</div>
    <div>Descrpition</div>
    <Button type='button'>Signup</Button>
    <Button type='button'>Login</Button>
    <Footer />

 
 </Container> 
    )
  
}

export default Landing