import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


const Header = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/home">
          <button className="button">Home</button>
        </Link>
      </div>

      <div className="logo">
        <Link to="/ticket">
          <button className="button">View Ticket</button>
        </Link>
      </div>

      <div className="logo">
        <Link to="/profile">
          <button className="button">Profile</button>
        </Link>
      </div>

      <div className="logo">
        {user ? (
          <h2>{user.name}</h2>
        ) : (
          <a href="./Login" target="_blank" rel="noopener noreferrer">
            <button className="button">Login</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
