import React from "react";
import "./searchform.css";

function SearchForm() {
  return (
    <div className="bus-booking-form-container">
      <h2>Bus Ticket Booking</h2>
      <form>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            placeholder="Destination City"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="departure-date">Departure Date:</label>
          <input
            type="date"
            id="departure-date"
            name="departure-date"
            required
          />
        </div>

        <button type="submit">Search Buses</button>
      </form>
    </div>
  );
}

export default SearchForm;
