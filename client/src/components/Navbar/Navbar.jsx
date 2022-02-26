import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = (props) => {
  return (
    <nav>
      {/* <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP} 
      </Link> */}
        <img className="logo" src="https://res.cloudinary.com/dk00a2nda/image/upload/v1645873351/Photo_site/Claudia-letters-logo_xo1bmf.png" alt="logo"/>
      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {/* <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link> */}
            {/* <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link> */}
            <InstagramIcon />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
