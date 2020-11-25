import React, { Component } from "react";
// import {  BrowserRouter, Route,Switch } from "react-router-dom";
// import { useSpring, animated } from "react-spring";
// import Registration from "./Components/Registration/Registration"
// import Signin from "./Components/Signin/Signin"
import Navigation from "./Components/Navigation/Navigation"
import Contact from "./Components/Contact/Contact"
import Profile from "./Components/Profile/Profile"
import "./App.css"
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import Question from "./Components/Question/Question";
import Login from "./Components/Login/login";
import LearnMore from "./Components/LearnMore/LearMore"

// const initialState = { 
//   route:"signout" ,
//   isSignedIn:false
//  }

class App extends Component {
  state = { 
    route:"signout" ,
    isSignedIn:false
   }

onRouteChange = (route)=> {
  if(route === 'signout'){
    this.setState({isSignedIn:false})
   
  }else if (route === 'home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route})
 }

  render() { 
    const {route, isSignedIn} = this.state
    let displayPage;
    if (route==='home'){
     displayPage = <div>
      <Question />
      
      </div>
    } else if (route==='signin') {
      displayPage =  <Login onRouteChange={this.onRouteChange} />
    } else if (route==='signout') {
      displayPage =  <Landing onRouteChange={this.onRouteChange} />
    } else if (route==='home') {
        displayPage =  <Question onRouteChange={this.onRouteChange} />
    } else if (route==='contact') {
        displayPage =  <Contact onRouteChange={this.onRouteChange} />
    } else if (route==='profile') {
      displayPage =  <Profile onRouteChange={this.onRouteChange} />
    } else if (route==='learnMore') {
      displayPage =  <LearnMore onRouteChange={this.onRouteChange} />
    } 
    return (
      

    
            <React.Fragment>
         <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {displayPage}
      <Footer />  
      
    </React.Fragment>
    


      )
  }
}
 
export default App;



