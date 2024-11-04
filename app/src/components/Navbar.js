import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import ST from "../assets/ST.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <nav>
        <Link className="mobile-logo" to="/">
          <div className="mobile-logo-container">
            <img src={ST} alt="ST Mobile Logo" className="mobile-logo-image" />
          </div>{" "}
        </Link>
        <Link className="logo" to="/">
          <div className="logo-container">
            <img src={logo} alt="SwiftTrim Logo" className="logo-image" />
          </div>{" "}
        </Link>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Items */}
        <div className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <NavLink exact to="/" onClick={toggleMenu}>
            <a>Home</a>
          </NavLink>
          <NavLink to="/services" onClick={toggleMenu}>
            <a>Services</a>
          </NavLink>
          <NavLink to="/reviews" onClick={toggleMenu}>
            <a>Reviews</a>
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            <a>Contact</a>
          </NavLink>
          <NavLink to="/quote" onClick={toggleMenu}>
            <a>Quote</a>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
