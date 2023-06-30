import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://deployment-practice75.onrender.com/signup', {
        firstName: fullName,
        lastName,
        email,
        password,
      });
      debugger
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.error || 'Failed to sign up');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to sign up');
    }
  };
  
 

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-8'>
            <form className='signup-form' onSubmit={handleSubmit}>
              <h2>Signup Page</h2>
              <div className='mb-3'>
                <label htmlFor='fullNameInput' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='fullNameInput'
                  placeholder='Enter your full name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='lastNameInput' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='lastNameInput'
                  placeholder='Enter your last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='emailInput' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='emailInput'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='passwordInput' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='passwordInput'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>Already Haveing Account? <Link to="/">Login</Link></p>
              <button type='submit' className='btn btn-primary'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
