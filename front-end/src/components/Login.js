import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {  Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:3000/login', { email, password });
          navigate("/dashbord");
          toast.success(response.data.message);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            toast.error('Invalid email or password!');
          } else {
            toast.error('Failed to login. Please try again later.');
          }
        }
      };
      
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-sm-8'>
              <form className='form' onSubmit={handleSubmit}>
                <h2>Login Page</h2>
                <div className='mb-3'>
                  <label htmlFor='emailInput' className='form-label'>
                    Email address:
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='emailInput'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='passwordInput' className='form-label'>
                    Password:
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='passwordInput'
                    placeholder='Enter your password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
                <button type='submit'  className='btn btn-primary'>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
  
        <ToastContainer />
      </div>
    );
  }
  export default Login;