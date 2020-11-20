import React, { Component } from "react";
// import { useSpring, animated } from "react-spring";
// import Registration from "./Components/Registration/Registration"
// import Signin from "./Components/Signin/Signin"
import Navigation from "./Components/Navigation/Navigation"
import "./App.css"
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import Question from "./Components/Question/Question";
import Login from "./Components/Login/login";
// import Singin from "./Components/Login/Signin/Signin";
// import Registration from "./Components/Registration/Registration";



class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
         <Navigation />
        <Landing />
      <Login />
   
    <Question />
    <Footer />
    </React.Fragment>
      );
  }
}
 
export default App;



