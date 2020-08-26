import React from 'react';
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bcd-navbar">
        <div className="container">
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">              
                    <NavLink exact activeClassName="nav-active" className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">               
                    <NavLink  exact activeClassName="nav-active" className="nav-link" to="/about">About</NavLink>  
                </li>
                <li className="nav-item">
                <NavLink exact activeClassName="nav-active" className="nav-link" to="/services">Services</NavLink> 
                </li>
                <li className="nav-item">
                <NavLink  exact activeClassName="nav-active" className="nav-link" to="/contact">Contact</NavLink> 
                </li>

                <li className="nav-item">
                <NavLink  exact activeClassName="nav-active" className="nav-link" to="/login">Login/Signup</NavLink> 
                </li>
               
                </ul>
            </div>
           </nav>
          </div> 
        </div>
    );
};

export default Navbar;


