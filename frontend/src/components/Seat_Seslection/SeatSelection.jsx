import React, { useState } from "react";
import "./seatselection.css";

const SeatSelection = () => {
  const rows = 10;
  const seatsPerRow = 4; // 1 column with 4 seats

  const generateSeatId = (row, seat) => `${row}${String.fromCharCode(65 + seat)}`;

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleCheckboxChange = (row, seat) => {
    const seatId = generateSeatId(row, seat);
    setSelectedSeat(seatId);
    // You can show the pay now pop-up here or handle it as needed
    // For simplicity, let's just log the selected seat for now
    console.log("Selected Seat:", seatId);
  };

  return (
    <div className="back">
    <div className="plane">
      <div className="cockpit">
        <h1>PLEASE SELECT A SEAT</h1>
      </div>
      <div className="exit"></div>
      <ol className="cabin fuselage">
        {Array.from({ length: rows }, (_, row) => (
          <li key={`row-${row + 1}`} className={`row row--${row + 1}`}>
            <ol className="seats" type="A">
              {Array.from({ length: seatsPerRow }, (_, seat) => (
                <li key={`seat-${row + 1}-${seat}`} className="seat">
                  <input
                    type="checkbox"
                    id={generateSeatId(row + 1, seat)}
                    checked={generateSeatId(row + 1, seat) === selectedSeat}
                    onChange={() => handleCheckboxChange(row + 1, seat)}
                  />
                  <label htmlFor={generateSeatId(row + 1, seat)}>{generateSeatId(row + 1, seat)}</label>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      {selectedSeat && (
        <div className="pay-now-popup">
          <button className="pay-now">
            Pay Now
          </button>
          <div className="para">
          <p>Seat: {selectedSeat}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SeatSelection;