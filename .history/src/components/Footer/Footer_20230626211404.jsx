import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  )
}

export default Footer