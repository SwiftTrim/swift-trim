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

  const handleLogoClick = () => {
    // Close the menu if it's open
    if (isMenuOpen) {
      toggleMenu();
    }
    // Navigate to the homepage
    window.location.href = "/";
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
    { name: "Quote", path: "/quote" },
  ];

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <nav>
        <Link className="mobile-logo" to="/" onClick={handleLogoClick}>
          <div className="mobile-logo-container">
            <img src={ST} alt="ST Mobile Logo" className="mobile-logo-image" />
          </div>
        </Link>
        <Link className="logo" to="/" onClick={handleLogoClick}>
          <div className="logo-container">
            <img src={logo} alt="SwiftTrim Logo" className="logo-image" />
          </div>
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
          {menuItems.map((item, index) => (
            <NavLink key={index} to={item.path} onClick={toggleMenu}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
