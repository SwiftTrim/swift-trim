import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li className="facebook">
            <a
              href="https://www.facebook.com/people/SwiftTrim/61567684291532"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i> {/* Facebook Icon */}
            </a>{" "}
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com/swifttrimga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i> {/* Instagram Icon */}
            </a>{" "}
          </li>
        </ul>
        <div className="footer-text">
          <Link className="privacy" to="/privacy">
            Privacy Policy
          </Link>
          <p className="copyright">
            | &copy; {new Date().getFullYear()} SwiftTrim LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
