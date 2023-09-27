// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import "./Style.css";

// const Navbar = () => {
//   const [expandNavbar, setExpandNavbar] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     setExpandNavbar(false);
//   }, [location]);
//   return (
//     <div className="navbar" id={expandNavbar ? "open" : "close"}>
//       <div className="toggleButton">
//         <button
//           onClick={() => {
//             setExpandNavbar((prev) => !prev);
//           }}
//         >
//           <DehazeIcon />
//         </button>
//       </div>
//       <div className="links">
//         <Link to="/"> Home </Link>
//         <Link to="/projects"> Projects </Link>
//         <Link to="/experience"> Experience </Link>
//         <Link to="/contact"> Contact </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Style.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Video Search</span>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? 'Close' : 'Open'}
      </button>
      <ul className={`navbar-nav ${isNavOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/experience" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/experience" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
