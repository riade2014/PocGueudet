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
        <div className="App-headerMO">
          
          <Router>
            <nav className="app-nav">
              <div className="titleMo">
                <img src={logo} alt="Logo"/>
              </div>
              <ul className="app-ul">
                <li className="app-li">
                  <NavLink className="navlink" to="/acheter">Acheter</NavLink>
                </li>
                <li className="app-li">
                  <NavLink className="navlink" to="/Entretenir">Entretenir</NavLink>
                </li>
                <li className="app-li">
                  <NavLink className="navlink" to="/vendre">Vendre</NavLink>
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