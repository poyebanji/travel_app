import React, { Component } from "react";
import {  BrowserRouter, Route,Switch } from "react-router-dom";
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
// import Singin from "./Components/Login/Signin/Signin";
// import Registration from "./Components/Registration/Registration";

const initialState = { 
  route:"signout" ,
  isSignedIn:false
 }

class App extends Component {
  state = {initialState}

onRouteChange = (route)=> {
  if(route === 'signout'){
    this.setState({initialState})
  }else if (route === 'signin'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route})
 }

  render() { 
    const {route, isSignedIn} = this.state
    return (
      

      <BrowserRouter>
            <React.Fragment>
         <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
         <Switch>
           <Route exact path ='/'>
         {route === "home"
         ?
         <div>
         <Question />
         
         </div>
         : (
           route === "signin"
          ?
          <Login onRouteChange={this.onRouteChange} />
          :
          <Landing onRouteChange={this.onRouteChange}/>
         )
        
         }
         </Route>
         <Route path="/contact">
            <Contact />
         </Route>
         <Route path="/profile">
            <Profile />
         </Route>
         </Switch>
      <Footer />  
      
    </React.Fragment>
      </BrowserRouter>


      )
  }
}
 
export default App;



