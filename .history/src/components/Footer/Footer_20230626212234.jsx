import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <div data-test="copyright">
            &copy; {new Date().getFullYear()} Copyright: Shepota
          </div>
    </div>
  )
}

export default Footer