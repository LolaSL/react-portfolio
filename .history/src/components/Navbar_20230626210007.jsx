import React, { useEffect, useState } from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
      }, [location]);
    return (
      
    <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
  )
}

export default Navbar