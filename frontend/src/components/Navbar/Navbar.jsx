import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, setIsLoggedIn: updateIsLoggedIn }) => {
  const [menu, setMenu] = useState('home');
  const [showPopup, setShowPopup] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [userName, setUserName] = useState('');
  const token = localStorage.getItem('token'); // Get the token from localStorage

  const navigate = useNavigate();

  const handleCartClick = () => {
    // Your cart click logic
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Fetch cart items count logic
  }, []);

  useEffect(() => {
    // If token exists, fetch user data
    if (token) {
      updateIsLoggedIn(true);
      fetchUserData(token); // Fetch user details using the token
    } else {
      updateIsLoggedIn(false);
    }
  }, [token, updateIsLoggedIn]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/get-user-details', { // Make sure this URL is correct
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache', // Prevent the browser from caching the request
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      if (data.user) {
        setUserName(data.user.name); // Set the user name from the response
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    updateIsLoggedIn(false);
    setUserName(''); // Clear userName state on logout
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenu('home')}>
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        {/* Add other navbar items */}
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" onClick={handleCartClick} />
          {totalItems > 0 && <div className="cart-count">{totalItems}</div>}
        </div>
        {token ? (
          <div className="navbar-user-info">
            <p className="username">Hi, {userName}</p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Your cart is empty! Please add some items to proceed.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;



