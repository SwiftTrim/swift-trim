import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link className="logo" to="/">
          <img src={logo} alt="SwiftTrim Logo" />
        </Link>
        <div className="menu-items">
          <NavLink exact="true" to="/">
            <a>Home</a>
          </NavLink>
          <NavLink to="/services">
            <a>Services</a>
          </NavLink>
          <NavLink to="/reviews">
            <a>Reviews</a>
          </NavLink>
          <NavLink to="/contact">
            <a>Contact</a>
          </NavLink>
          <NavLink to="/quote">
            <a>Quote</a>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
