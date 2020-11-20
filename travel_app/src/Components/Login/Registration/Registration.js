import React, { Component } from 'react';

class Registration extends Component {
  constructor({props}){
    super(props)
    this.state = {  }
  }

  onSubmitSignin = ()=> {
    this.props.onRouteChange('home')
  }
  render() { 
    return (       
    <React.Fragment>
        <label htmlFor="fullname">full name</label>
        <input type="text" id="fullname" />
        <label htmlFor="email">email</label>
        <input type="text" id="email" />
        <label htmlFor="password">password</label>
        <input type="text" id="password" />
        <label htmlFor="confirmpassword">confirm password</label>
        <input type="text" id="confirmpassword" />
        <input onClick = {this.onSubmitSignin} type="submit" value="submit" className="submit" />
      </React.Fragment>
       );
  }
}
 
export default Registration;