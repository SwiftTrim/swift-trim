import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <nav>
        <Link className="logo" to="/">
          <div className="logo-container">
            <img src={logo} alt="SwiftTrim Logo" className="logo-image" />
          </div>{" "}
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
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
