import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Registration from "./Components/Registration/Registration"
import Signin from "./Components/Signin/Signin"
import Navigation from "./Components/Navigation/Navigation"
import "./App.css"
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";



function App() {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
      left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
      left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
    });
  
    const loginBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 2px #1059FF",  //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
      borderBottom: registrationFormStatus
        ? "solid 2px #1059FF"
        : "solid 0px transparent", //Animate bottom border of register button
    });
  
    function registerClicked() {
      setRegistartionFormStatus(true);
    }
    function loginClicked() {
      setRegistartionFormStatus(false);
    }
  
    return (
      <React.Fragment>
        <Navigation />
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <animated.button
            onClick={loginClicked}
            id="loginBtn"
            style={loginBtnProps}
          >
            Login
          </animated.button>
          <animated.button
            onClick={registerClicked}
            id="registerBtn"
            style={registerBtnProps}
          >
            Register
          </animated.button>
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <Signin />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <Registration />
          </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
          <div>Forgot your password</div>
        </animated.div>
      </div>
      <Landing />
      <Footer />
      </React.Fragment>
    );
  }
  
  // function LoginForm() {
  //   return (
  //     <React.Fragment>
  //       <label for="username">USERNAME</label>
  //       <input type="text" id="username" />
  //       <label for="password">PASSWORD</label>
  //       <input type="text" id="password" />
  //       <input type="submit" value="submit" className="submit" />
  //     </React.Fragment>
  //   );
  // }
  
  // function RegisterForm() {
  //   return (
  //     <React.Fragment>
  //       <label for="fullname">full name</label>
  //       <input type="text" id="fullname" />
  //       <label for="email">email</label>
  //       <input type="text" id="email" />
  //       <label for="password">password</label>
  //       <input type="text" id="password" />
  //       <label for="confirmpassword">confirm password</label>
  //       <input type="text" id="confirmpassword" />
  //       <input type="submit" value="submit" class="submit" />
  //     </React.Fragment>
  //   );
  // }
  
  export default App;
