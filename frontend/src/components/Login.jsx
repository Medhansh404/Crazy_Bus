import React, { useState }from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from 'axios';
import{useNavigate} from "react-router-dom";

const Login = () => {
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(e)
    axios.post('http://localhost:3001/login', {email, password}).then(result=>console.log(result)).catch(err => console.log(err))
  }
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#" onSubmit={handleSubmit}>
            <div className="media-options">
              <a href="#" className="field google">
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" className="google-img" />
                <span>Login with Google</span>
              </a>
            </div>

            <div className="line"></div>

            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" onChange={(e)=> setEmail(e.target.value)}/>

            </div>

            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" onChange={(e)=> setPassword(e.target.value)}/>
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>Don't have an account? 
              <Link to="/Register" className="link signup-link">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
