import React from 'react';
import { Navlink, Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
        <div className="bcd-footer">
        <div className="container-fluid no-gutters">
         <div className="row no-gutters">

            <div className="col-lg-4  p-0">
            <div className="box links">
            <h2>Useful Links</h2>
            <Link href="#">Terms and Conditions</Link> 
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            </div>
            </div>
          
            <div className="col-lg-4 no-gutters  p-0 m-0">
            <div className="box social">
            <h2>Follow Us On Social Media</h2>
            <Link href="#" className="fa fa-facebook"></Link>
            <Link href="#" className="fa fa-twitter"></Link>
            <Link href="#" className="fa fa-youtube"></Link>
            <Link href="#" className="fa fa-instagram"></Link>
            
            </div>
            </div>

            <div className="col-lg-4">
            <div class="box subscribe">
            <h2>Subscribe To Our Newsletter</h2>
            <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>

            </div>
            </div>  
        
        </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;


