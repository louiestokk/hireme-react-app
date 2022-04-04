import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { navlinks } from "../../utils/navlinks";
import { FaHireAHelper } from "react-icons/fa";
const Nav = () => {
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
      <div className="nav-menu">
        {navlinks.map((link) => (
          <div key={link.id}>
            <Link to={`/${link.label}`}>{link.label}</Link>
          </div>
        ))}
        <button>Logga in</button>
        <button>Registrera dig</button>
      </div>
    </div>
  );
};

export default Nav;
