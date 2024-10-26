import React from "react";
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
        <p>&copy; {new Date().getFullYear()} SwiftTrim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
