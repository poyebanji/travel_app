import React, {Component} from 'react';
import {Container,Button} from 'react-bootstrap'

class Signin extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <h2>I am Signin Page Update 2020-11-16 </h2>
            <Button type='button' size='lg' block>Signup</Button>
        
            <Button type='button'>Login</Button>
                
            </Container>
          );
    }
}
 
export default Signin;

