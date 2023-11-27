import React,{useState, useContext} from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Make sure to use the correct file name convention
import DropdownComponent from "../Dropdown/Dropdown";
import {UserContext} from "../../Routes/AllRoutes"

const Header = () => {
  //let user = JSON.parse(localStorage.getItem("user"));

  //for profile viewing and sign out
  const { userAuth, userAuth: {token, profile_img}} = useContext(UserContext);

  return (
    <div className="header-navbar">
      <div className="header-logo">
        <Link to="/home" className="header-button">
          Home
        </Link>
      </div>

      <div className="header-logo">
        <Link to="/ticket" className="header-button">
          View Ticket
        </Link>
      </div>

      {
        token?
        <div>
        <DropdownComponent />
      </div>
        :
        <div className="header-logo">
          <Link to="/Login" className="header-button">
            Login
          </Link>
      </div>

      }
      

    </div>
  );
};

export default Header;
