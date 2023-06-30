import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Style.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
          <div className="copyright">
              
            &copy; {new Date().getFullYear()} Copyright: Shepota Media
          </div>
    </div>
  )
}

export default Footer