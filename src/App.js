import React, { Component } from "react";
//import Routes from "./Routes";  //npm install --save react-router-dom
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./mycomponents/Navbar";
import Home from "./mycomponents/Home";
import About from "./mycomponents/About";
import Services from "./mycomponents/Services";
import Contact from "./mycomponents/Contact";
import Footer from "./mycomponents/Footer";
import NotFound from "./mycomponents/NotFound";
import Login from "./mycomponents/Login";
//import ServiceDetails from "./mycomponents/ServiceDetails";
import ServiceDetails from "./mycomponents/ServiceDetails";

// import images1 from "./images/images1.png";
// import img11 from "./images/img11.jpg";



import './scss/About.scss';
import './scss/Contact.scss';
import './scss/Home.scss';
import './scss/Navbar.scss';
import './scss/Services.scss';
import './scss/ServiceDetails.scss';
import './scss/Footer.scss';





class App extends Component {
  render() {
    return (

      
        <Router>
          <Navbar />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/service-details" component={ServiceDetails} />
            <Route  component={NotFound} />
            </Switch>
        
          </div>
          <Footer />
        </Router>
     
      
    );
  }
}



export default App;
