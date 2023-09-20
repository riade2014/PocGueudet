import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import Acheter from "../pages/Acheter";
import Vendre from "../pages/Vendre";
import Home from "../pages/Home";
import Entretenir from "../pages/Entretenir";
import Groupe from "../pages/Groupe";
import Avis from "../pages/Avis";
import Concession from "../pages/Concession";
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App-header">
      <Router>
        <nav>
          <Link to="/" className="title">
            Website
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/acheter">Acheter</NavLink>
            </li>
            <li>
              <NavLink to="/Entretenir">Entretenir</NavLink>
            </li>
            <li>
              <NavLink to="/vendre">Vendre</NavLink>
            </li>
            <li>
              <NavLink to="/groupe">Groupe</NavLink>
            </li>
            <li>
              <NavLink to="/avis">Avis client</NavLink>
            </li>
            <li>
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
export default Header;