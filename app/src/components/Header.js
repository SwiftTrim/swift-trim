import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="phone">
          <i className="fa fa-phone"></i> {/* Phone Icon */}
          <p>(770) 676-2846</p>
        </li>
        <li className="email">
          <i className="fa fa-envelope"></i>
          {/* Envelope Icon */}
          <p>info@swifttrimga.com</p>
        </li>
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
    </div>
  );
};

export default Header;
