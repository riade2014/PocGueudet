import React, { useState } from "react";
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
import Groupe from "../pages/Groupe";
import Avis from "../pages/Avis";
import Concession from "../pages/Concession";
import "./NavbarPc.css";
import logo from '../../assets/images/logo.png';

function NavbarPc(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="App-headerP">

        <Router>
          <nav className="app-navP">
            <div className="titleP">
              <img src={logo} alt="Logo" />
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <ul className={menuOpen ? "open" : ""}> */}
            <ul className={` app-ulP ${menuOpen ? "open" : "" }`}> 
            {/* une des façons de faire la declaration de plusieaurs attributs dans un meme className */}
              <li className="app-liP">
                <NavLink to="/acheter">Acheter</NavLink>
              </li>
              <li className="app-liP">
                <NavLink to="/Entretenir">Entretenir</NavLink>
              </li>
              <li className="app-liP">
                <NavLink to="/vendre">Vendre</NavLink>
              </li>
              <li className="app-liP">
                <NavLink to="/groupe">Groupe</NavLink>
              </li>
              <li className="app-liP">
                <NavLink to="/avis">Avis client</NavLink>
              </li>
              <li className="app-liP">
                <NavLink to="/concession">Trouver concession</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acheter" element={<Acheter />} />
            <Route path="/vendre" element={<Vendre />} />
            <Route path="/entretenir" element={<Entretenir />} />
            <Route path="/groupe" element={<Groupe />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/concession" element={<Concession />} />
          </Routes>
        </Router>
      </div>
    );
}
export default NavbarPc;