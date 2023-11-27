// BusCard.jsx
import React from 'react';
import './buscard.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";

const BusCard = () => {
  return (
    <div className='imgg'>
      <div>
        <Header />
      </div>
      <div className="bus-booking-card">
        <div className="card-head">
          <div className="bus-route">
            <div className="departure-city">LNMIIT</div>
            <span className='arrow-separators'> &#8594;</span>
            <div className="arrival-city">RAJA PARK</div>
          </div>
        </div>
        <div className="card-body">
          <div className="bus-details">
          <div className='tag3'>
            <div className="tag1">
              <div className="out">Time :</div>
              <div className="departure-time">10:00 AM</div>
            </div>
            <div className="tag2">
              <div className="out">Available Seats :</div>
              <div className="bus-seats">50</div>
            </div>
            </div>
            <div className="booking-cta">
              <button className="book-now">
                <Link to="/seatselection" className="book-text">
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusCard;
