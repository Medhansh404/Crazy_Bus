import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./register.css";
import {toast, Toaster} from "react-hot-toast";

const Register = ({ history }) => {
  // State to manage user input for registration
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle user input changes
  const handleChangeEvent = (e, field) => {
    let fieldValue = e.target.value;
    setNewUser({ ...newUser, [field]: fieldValue });
  };

  // Function to handle form submission (user registration)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the registration API endpoint
      const response = await axios.post('http://localhost:8080/register', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful registration, you can customize this part
      console.log(response.data);
      toast.log("Signed in Successfully")

      // Redirect the user to the login page after successful registration
      history.push('/login');
    } catch (error) {
      
      toast.error(error);
    }
  };

  // JSX structure for the registration form
  return (
    
    <section className="register-container forms">
    <Toaster />
      <div className="register-form signup">
        <div className="register-form-content">
          <header>Signup</header>

          {/* Form for user registration */}
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="text"
                placeholder="Name"
                className="input"
                onChange={(e) => handleChangeEvent(e, "name")}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => handleChangeEvent(e, "email")}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Mobile No."
                className="input"
                onChange={(e) => handleChangeEvent(e, "mobile")}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
                onChange={(e) => handleChangeEvent(e, "password")}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
                onChange={(e) => handleChangeEvent(e, "confirmPassword")}
                required
              />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="field button-field">
              <button type="submit">Signup</button>
            </div>
          </form>

          {/* Link to the login page */}
          <div className="form-link">
            <span>
              Already have an account?
              <Link to="/login" className="link login-link">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;