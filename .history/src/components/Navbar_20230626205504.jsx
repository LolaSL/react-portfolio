import React from 'react';
import {
    Link,
    // useLocation
} from "react-router-dom";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
  return (
    <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
  )
}

export default Navbar