import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, setIsLoggedIn: updateIsLoggedIn }) => {
  const [menu, setMenu] = useState('home');
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCartClick = () => {
    if (getTotalCartAmount() === 0) {
      setShowPopup(true);
    } else {
      navigate('/cart');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      updateIsLoggedIn(true); // Use the prop to update login status
    } else {
      updateIsLoggedIn(false); // Use the prop to update login status
    }
  }, [updateIsLoggedIn]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    updateIsLoggedIn(false); // Use the prop to update login status
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => setMenu('home')}>
        <img src={assets.logo} alt='' className='logo' />
      </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#resform' onClick={() => setMenu('reservation')} className={menu === 'reservation' ? 'active' : ''}>Reservation</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='' onClick={handleCartClick} />
          <div className='dot'></div>
        </div>
        {localStorage.getItem('token') ? (
          <button onClick={handleLogout}>Log Out</button>
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
