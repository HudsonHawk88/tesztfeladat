import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, toggleNavbar] = useState(false);
  const navList = document.getElementById("nav-list");

  useEffect(() => {
    if (navList) {
      if (isOpen) {
        navList.classList.toggle("_show");
      } else {
        navList.classList.toggle("_show");
      }
    }
  }, [isOpen, navList]);

  return (
    <div className="navbar">
      <div className="navbar__logo-div">
        <img
          className="navbar__logo"
          alt="inftechsol-logo"
          src="images/logo.png"
        />
      </div>
      <span className="navbar__span" onClick={() => toggleNavbar(!isOpen)}>
        <i className="navbar__fa-icon fa fa-bars"></i>
      </span>
      <nav className="navbar__nav" id="nav-list">
        <ul className="navbar__navlist">
          <li className="navbar__navitem">
            <NavLink
              exact
              className="navbar__navlink"
              activeClassName="navbar__navlink--active"
              to="/"
            >
              Főoldal
            </NavLink>
          </li>
          <li className="navbar__navitem">
            <NavLink
              className="navbar__navlink"
              activeClassName="navbar__navlink--active"
              to="/felhasznalok"
            >
              Felhasználók
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
