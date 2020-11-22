import React, { Component } from "react";
import {  BrowserRouter, Route,Switch } from "react-router-dom";
// import { useSpring, animated } from "react-spring";
// import Registration from "./Components/Registration/Registration"
// import Signin from "./Components/Signin/Signin"
import Navigation from "./Components/Navigation/Navigation"
import Contact from "./Components/Contact/Contact"
import "./App.css"
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import Question from "./Components/Question/Question";
import Login from "./Components/Login/login";
// import Singin from "./Components/Login/Signin/Signin";
// import Registration from "./Components/Registration/Registration";



class App extends Component {
  state = { 
    route:"signout" 
   }

onRouteChange = (route)=> {
  this.setState({route:route})
  console.log(route)
}

  render() { 
    return (

      <BrowserRouter>
            <React.Fragment>
         <Navigation onRouteChange={this.onRouteChange} />
         <Switch>
           <Route exact path ='/'>
         {this.state.route === "home"
         ?
         <div>
         <Question />
         
         </div>
         : (
           this.state.route === "signin"
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
         </Switch>
      <Footer />  
      
    </React.Fragment>
      </BrowserRouter>


      )
  }
}
 
export default App;



