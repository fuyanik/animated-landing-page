import "./navbar.css"
import logom from './images/logom.png'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import { useState } from "react";
import NavbarDropdown from "./navbarDropdown";



const Navbar = () => {
       const [display, setDisplay] = useState(false);
      

  return (

   <nav className="Navbar"  data-aos="fade-down"  data-aos-duration="700">
 

          <Link to="/"> <img src={logom} className="logom" alt="logo"  /> </Link> 
          <ul className="navbar-items">
            <li className="navbar-li" >COLLECTİON</li>
            <li className="navbar-li"> product features</li> 
            <li className="navbar-li"> about us</li> 
            <li className="navbar-li"> Certificates</li>
            <li className="navbar-li"> Contact Us</li> 
          </ul>

          <div className="navbar-button">  PORTFOLİO</div>

   </nav> 


  )

}

export default Navbar;