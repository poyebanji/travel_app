import React from 'react'
import {Container} from 'react-bootstrap'
import Footer from './../Footer/Footer'
import Signin from './../Signin/Signin'

const Landing = ()=> {

    return (
<Container> 
    I am Landing Page
    <div>LOGO</div>
    <div>Descrpition</div>

    <Signin />
    <Footer />

 
 </Container> 
    )
  
}

export default Landing