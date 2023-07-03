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
        <a href='https://www.instagram.com/shepota68' ><InstagramIcon /></a>
        <a href='https://www.facebook.com/lola.shepota' ><FacebookIcon /></a>
        <a href='https://www.linkedin.com/in/lola-s-2aba6340-lo' ><LinkedInIcon /></a>
        <a href='https://github.com/LolaSL' ><GitHubIcon /></a>
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
