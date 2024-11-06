import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            <a href="#">Go to Top</a>
          </p>
          <p>
            &copy;<span>Copyright</span>
            <strong className="px-1 sitename">Samarjit</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">Designed and Developed by Samarjit</div>
      </div>
    </footer>
  );
};

export default Footer;
