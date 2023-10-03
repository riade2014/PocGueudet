import React from "react";
//import Hamburger from "hamburger-react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Acheter from "../pages/Acheter";
import Vendre from "../pages/Vendre";
import Home from "../pages/Home";
import Entretenir from "../pages/Entretenir";
import "./NavbarMobile.css";
import logo from '../../assets/images/logo.png'

function NavbarMobile(){
    return (
        <div className="App-header">
          
          <Router>
            <nav>
              <div className="title">
                <img src={logo} alt="Logo"/>
              </div>
              
              <ul>
                <li>
                  <NavLink to="/acheter">Acheter</NavLink>
                </li>
                <li>
                  <NavLink to="/Entretenir">Entretenir</NavLink>
                </li>
                <li>
                  <NavLink to="/vendre">Vendre</NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acheter" element={<Acheter />} />
              <Route path="/vendre" element={<Vendre />} />
              <Route path="/entretenir" element={<Entretenir />} />
            </Routes>
          </Router>
        </div>
      );
}
export default NavbarMobile;