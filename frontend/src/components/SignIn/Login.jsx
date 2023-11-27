import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";
import {useContext} from "react"
import { UserContext } from "../../Routes/AllRoutes";




//Login with database and server
const Login = () => {

let {userAuth:{ token }, setUserAuth } = useContext(UserContext);
useContext(UserContext);
// console.log(token);

  // State to manage user input for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hook to navigate to different pages
  const navigate = useNavigate();


  // Function to handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      // Send a POST request to the login API endpoint
      const response = await axios.post('http://localhost:8080/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Extract the authentication token from the response
      //console.log(response.data);
      const { token, name } = response.data;
      // Store the token in session storage for future authenticated requests
      sessionStorage.setItem("user", {token, name});
      setUserAuth({token});

      // Redirect the user to the '/routes' page upon successful login
      navigate('/home');
    } catch (error) {
      // Log any errors that occur during the login process
      toast.error("Enter Valid Email!");

      // You can add logic here to handle login failure, e.g., display an error message
    }

    
  };

  // JSX structure for the login form
  return (
    <section className="login-containers forms">
     <Toaster />
      <div className="login-form login">
        <div className="login-form-content">
          {/* Header indicating this is the login section */}
          <header>Login</header>

          {/* Form for user login */}
          <form onSubmit={handleSubmit}>
            <div className="media-options">
              <a href="#" className="field google">
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" className="google-img" />
                <span>Login with Google</span>
              </a>
            </div>

            <div className="line"></div>
            {/* Input field for email */}
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Input field for password */}
            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" onChange={(e) => setPassword(e.target.value)} />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            {/* Link for password recovery */}
            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>

            {/* Button to submit the login form */}
            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
          </form>

          {/* Link to the registration page */}
          <div className="form-link">
            <span>Don't have an account?
              <Link to="/register" className="link signup-link">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;