import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { navlinks } from "../../utils/navlinks";
import { FaHireAHelper } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav">
      <div className="nav-logo">
        <FaHireAHelper />
        <h2>HireMe</h2>
      </div>
      <div className="nav-links">
        {navlinks.map((link) => (
          <div key={link.id}>
            <Link to={`/${link.label}`}>{link.label}</Link>
          </div>
        ))}
        <button className="login">Logga in</button>
        <button className="register">Registrera dig</button>
      </div>
      <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
        {navlinks.map((link) => (
          <div key={link.id} onClick={() => setShowNav(!showNav)}>
            <Link to={`/${link.label}`}>{link.label}</Link>
          </div>
        ))}
        <button className="login">Logga in</button>
        <button className="register">Registrera dig</button>
      </div>
      <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
        <FaBars />
      </button>
    </div>
  );
};

export default Nav;
