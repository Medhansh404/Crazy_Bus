import React, { useState } from 'react';
import './dropdown.css';
import { Link } from 'react-router-dom';

const DropdownComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-button"
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseLeave}
      >
        MENU <span className="down-arrow"> &#8744;</span>
      </div>
      {isMenuOpen && (
        <ul id="menu" className="dropdown-menu">
          <li className="parent">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">LogOut</a>
            </li>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;