import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.instagram.com">
          <InstagramIcon />
        </Link>
        <Link to="https://www.facebook.com">
          <FacebookIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/lola-s-2aba6340-lo">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com">
          <GitHubIcon />
        </Link>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Copyright: Portfolio</p>
      </div>
    </div>
  );
};

export default Footer;
