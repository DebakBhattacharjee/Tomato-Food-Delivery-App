import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const token = localStorage.getItem('token'); 
const Navbar = ({ setShowLogin, setIsLoggedIn: updateIsLoggedIn }) => {
  const [menu, setMenu] = useState('home');
  const [showPopup, setShowPopup] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(StoreContext);

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

  useEffect(() => {
    const total = Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    setTotalItems(total);
  }, [cartItems]);

  useEffect(() => {
    // const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token) {
      updateIsLoggedIn(true);
      if (user) {
        try {
          const userData = JSON.parse(user);
          const { name } = userData;
           setUserName(name); // Set userName from localStorage
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        console.log('User data is not available in localStorage');
      }
      fetchUserData(token);
    } else {
      updateIsLoggedIn(false);
    }
  }, [updateIsLoggedIn]);
  const fetchUserData = async (token) => {
    try {
      const response = await fetch('https://tomato-food-delivery-app-c3fj.onrender.com/get-user-details', { // Make sure this URL is correct
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
    <div className='navbar'>
      <Link to='/' onClick={() => setMenu('home')}>
        <img src={assets.logo} alt='logo' className='logo' />
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
          <img src={assets.basket_icon} alt='cart' onClick={handleCartClick} />
          {totalItems > 0 && <div className='cart-count'>{totalItems}</div>}
        </div>
        {localStorage.getItem('token') ? (
          <div className='navbar-user-info'>
            <p className='username'>Hi, {userName}</p>
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
