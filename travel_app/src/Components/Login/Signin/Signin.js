import React, { Component } from 'react';

class Signin extends Component {
  constructor({props}){
    super(props)
    this.state = { 
      signinEmail: '',
      signinPassword: ''
     }
  }
 
  onEmailChange = (event) => {
    this.setState({signinEmail:event.target.value})
  
  }

  onPasswordChange = (event)=> {
    this.setState({signinPassword:event.target.value})
  }

  // componentDidMount() {
  //   fetch('')
  //   .then(Response=> Response.json())
  //   .then();
  // }

onSubmitSignin = ()=> {
  fetch('http://localhost:3000/signin', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.signinEmail,
      password: this.state.signinPassword
    })
  })
  .then (response => response.json() )
  .then (user => console.log(user))
  this.props.onRouteChange('home')
}

  render() { 
    // const {onRouteChange} = this.props
    return (
      <React.Fragment>
      <label htmlFor="username">USERNAME</label>
      <input type="text" id="username" onChange={this.onEmailChange} />
      <label htmlFor="password" >PASSWORD</label>
      <input type="text" id="password"  onChange={this.onPasswordChange}/>
      <input  onClick = {this.onSubmitSignin} type="submit" value="submit" className="submit" />
      <div>Forgot your password</div>
    </React.Fragment>
      );
  }
}
 
export default Signin;