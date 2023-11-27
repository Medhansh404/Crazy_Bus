import React from "react";
import "./ticket.css";
import Header from "../Header/Header";

const Ticket = () => {
  return (
    <div className="imgg">
     <div>
        <Header />
    </div>
    <div className="wrapper_ticket">
      <div className="boarding-ticket">
        <div className="ticket-header">
          Bus Ticket
        </div>

        <div className="ticket-content">
          <div className="ticket-description">
            <span>Date : Nov 26, 2023 <br/><br />Time : 10:00 AM</span>
          </div>
          
          <div className="ticket-line">
            <div className="input-field">
              <div className="input-placeholder">Devansh Jain</div>
            </div>
         
            <div className="input-field">
              <div className="input-placeholder">21UCS060</div>
            </div>
          </div>

          <div className="ticket-line">
            <div className="input-field">
              <div className="input-placeholder">Bus No. - 1</div>
            </div>

            <div className="input-field">
              <div className="input-placeholder"> Seat - 1A</div>
            </div>
          </div>
        </div>

        <div className="ticket-code">
          <div className="code-content">
            <div className="flight-code">
              <div className="airport-code">
                <div className="iata-code">LNMIIT</div>
              </div>

              <div className="flight-separator">
                <div className="arrow-separator"></div>
              </div>

              <div className="airport-code">
                <div className="iata-code">RAJA PARK</div>
              </div>
            </div>
            <div className="qr-code"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ticket;

