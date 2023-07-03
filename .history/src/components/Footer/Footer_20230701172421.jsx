import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import "./Style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <a href="mailto:lolashepota@gmail.com?subject=Mail from my Website">
            <EmailIcon />
          </a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Copyright: Shepota Media</p>
      </div>
    </div>
  );
};

export default Footer;
