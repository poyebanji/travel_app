import React, { Component } from 'react';

class Registration extends Component {
  state = {  }
  render() { 
    return (       
    <React.Fragment>
        <label for="fullname">full name</label>
        <input type="text" id="fullname" />
        <label for="email">email</label>
        <input type="text" id="email" />
        <label for="password">password</label>
        <input type="text" id="password" />
        <label for="confirmpassword">confirm password</label>
        <input type="text" id="confirmpassword" />
        <input type="submit" value="submit" class="submit" />
      </React.Fragment>
       );
  }
}
 
export default Registration;