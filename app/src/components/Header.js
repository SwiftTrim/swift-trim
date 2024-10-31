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
      </ul>
    </div>
  );
};

export default Header;
