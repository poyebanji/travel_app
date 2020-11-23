import React, { Component } from 'react';

class Registration extends Component {
  constructor({props}){
    super(props)
    this.state = { 
      signinName: '',
      signinEmail: '',
      signinPassword: '',
      signinPassword2: ''
     }
  }
  onNameChange = (event) => {
    this.setState({signinName:event.target.value})
  
  }


  onPasswordChange2 = (event)=> {
    this.setState({signinPassword2:event.target.value})
  }
 
  onEmailChange = (event) => {
    this.setState({signinEmail:event.target.value})
  
  }

  onPasswordChange = (event)=> {
    this.setState({signinPassword:event.target.value})
  }


  onSubmitSignin = ()=> {
    fetch('http://localhost:3000/register', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: this.state.signinName,
      email: this.state.signinEmail,
      password: this.state.signinPassword
    })
  })
  .then (response => response.json() )
  .then (user => console.log(user))
    //this.props.onRouteChange('home')
  }
  render() { 
    return (       
    <React.Fragment>
        <label htmlFor="fullname">full name</label>
        <input type="text" id="fullname"  onChange = {this.onNameChange }/>
        <label htmlFor="email">email</label>
        <input type="text" id="email" onChange = {this.onEmailChange}/>
        <label htmlFor="password" >password</label>
        <input type="text" id="password" onChange = {this.onPasswordChange}/>
        <label htmlFor="confirmpassword">confirm password</label>
        <input type="text" id="confirmpassword" />
        <input onClick = {this.onSubmitSignin} type="submit" value="submit" className="submit" />
      </React.Fragment>
       );
  }
}
 
export default Registration;