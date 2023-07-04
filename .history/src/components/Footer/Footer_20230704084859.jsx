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
        <Link href='https://www.instagram.com/shepota68' ><InstagramIcon /></Link>
        <Link href='https://www.facebook.com/lola.shepota' ><FacebookIcon /></Link>
        <Link href='https://www.linkedin.com/in/lola-s-2aba6340-lo' ><LinkedInIcon /></Link>
        <Link href='https://github.com/LolaSL' ><GitHubIcon /></Link>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Copyright: React-Portfolio.</p>
      </div>
    </div>
  );
};

export default Footer;
