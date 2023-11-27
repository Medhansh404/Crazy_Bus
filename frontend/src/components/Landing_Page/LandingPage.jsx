// UniqueHomepage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./landingpage.css";

export default function UniqueHomepage() {
    const navigate = useNavigate();

    const enterSite = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className='unique-container'>
            <div className="unique-header-nav">
                <span className="unique-mytext1"> LNMIIT Bus Booking System </span>
            </div>

            <a href="/home" onClick={enterSite} className="unique-mainBtn">
                Get Started!
            </a>
        </div>
    );
}
