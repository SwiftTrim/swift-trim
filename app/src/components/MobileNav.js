import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./MobileNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  let mobileMenu;

  if (showMenu) {
    mobileMenu = (
      <div className="menu">
        {" "}
        <NavLink to="/services">
          <a color="#ffffff">Services</a>
        </NavLink>
        <NavLink to="/reviews">
          <a color="#ffffff">Reviews</a>
        </NavLink>
        <NavLink to="/contact">
          <a color="#ffffff">Contact</a>
        </NavLink>
        <NavLink to="/quote">
          <a color="#ffffff">Quote</a>
        </NavLink>
      </div>
    );
  }

  return (
    <nav className="mobile-nav">
      <div className="main">
        <Link className="logo" to="/">
          <img src={logo} alt="SwiftTrim Logo" />
        </Link>
        <span className="hamburger">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
      </div>

      {mobileMenu}
    </nav>
  );
};

export default MobileNav;
