import "../styles/Footer.css"
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Leo Club Of Nakuru</h3>
          <p>Preserve Today For Tomorrow's World.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: nakuruleoclub@gmail.com</li>
            <li>Nakuru, KE</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Leo Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
