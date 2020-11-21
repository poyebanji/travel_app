import React, { Component } from 'react';

class Signin extends Component {
  constructor({props}){
    super(props)
    this.state = {  }
  }
onSubmitSignin = ()=> {
  
  this.props.onRouteChange('home')
}

  render() { 
    // const {onRouteChange} = this.props
    return (
      <React.Fragment>
      <label htmlFor="username">USERNAME</label>
      <input type="text" id="username" />
      <label htmlFor="password">PASSWORD</label>
      <input type="text" id="password" />
      <input  onClick = {this.onSubmitSignin} type="submit" value="submit" className="submit" />
      <div>Forgot your password</div>
    </React.Fragment>
      );
  }
}
 
export default Signin;