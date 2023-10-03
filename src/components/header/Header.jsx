import React from "react";
// import React, { useState } from "react";
// //import Hamburger from "hamburger-react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   NavLink,
// } from "react-router-dom";

// import Acheter from "../pages/Acheter";
// import Vendre from "../pages/Vendre";
// import Home from "../pages/Home";
// import Entretenir from "../pages/Entretenir";
// import Groupe from "../pages/Groupe";
// import Avis from "../pages/Avis";
// import Concession from "../pages/Concession";
import "./Header.css";
// import logo from '../../assets/images/logo.png'
import NavbarMobile from "../navbarMobile/navbarMobile";
import NavbarPc from "../navbarPc/NavbarPc";
function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // let isPhone=false;
  if ('ontouchstart' in window) {
    return (
      <NavbarMobile />


    );
  } else {
    return (

      <NavbarPc />

    );
  }
}
export default Header;
