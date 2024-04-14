import React from "react";

import "./Navbar.css";
import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav>
        <NavLink className="nav-link" smooth to="/#about">
          <span className="sep"></span>
          <a href="/">ABOUT</a>
        </NavLink>
        <NavLink className="nav-link" smooth to="#skills">
          <span className="sep"></span>
          <a href="/">SKILLS</a>
        </NavLink>
        <NavLink className="nav-link" smooth to="/#projects">
          <span className="sep"></span>
          <a href="/">PROJECTS</a>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
