import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin, setIsLoggedIn }) => {
  const [currState, setCurrState] = useState('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currState === 'Login' ? 'http://localhost:5000/login' : 'http://localhost:5000/signup';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token); // Save the token
        setIsLoggedIn(true); // Update login status
        setShowLogin(false); // Close the popup
      } else {
        alert(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error has occurred');
    }
  };
  
  

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Login' ? null : <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your name' required />}
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your email' required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
          {currState === 'Sign Up' && (
            <>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Your phone' />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Your address' />
            </>
          )}
        </div>
        <button type="submit">{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login' ? (
          <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login Here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
