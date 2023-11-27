// profile.jsx

import React from "react";
import "./profile.css";
import Header from "../Header/Header";

const Profile = () => {
  return (
    <div className="imgg">
    <div>
        <Header />
    </div>
      <div className="content-container">
        <div className="profile-content">
          <h2 className="profile-heading">PROFILE</h2>
          <hr style={{borderColor: '#30475E'}} />
          <div className="table-container">
            <table className="user-information-table">
              <tbody>
                {renderTableRow("Roll Number", "21UCS060")}
                {renderTableRow("Name", "Devansh Jain")}
                {renderTableRow("Email", "21ucs060@lnmiit.ac.in")}
                {renderTableRow("Role", "Student")}
                {renderTableRow("Mobile Number", "7023624338")}
              </tbody>
            </table>
          </div>
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

const renderTableRow = (label, value) => (
  <tr key={label}>
    <td>
      <strong>{label}:</strong>
    </td>
    <td className="text-primary">{value}</td>
  </tr>
);

export default Profile;