<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin, setIsLoggedIn: updateIsLoggedIn }) => {
  const [menu, setMenu] = useState('home');
  const navigate = useNavigate();

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
=======
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
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
>>>>>>> Stashed changes
  };

  return (
    <div className='navbar'>
     <Link to='/' onClick={() => setMenu("home")} >
     <img src={assets.logo} alt='' className='logo' />
     </Link>
      <ul className='navbar-menu'>
<<<<<<< Updated upstream
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#resform' onClick={() => setMenu('reservation')} className={menu === 'reservation' ? 'active' : ''}>Reservation</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='' />
          <div className='dot'></div>
        </div>
        {localStorage.getItem('token') ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
=======
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#resform' onClick={() => setMenu("reservation")} className={menu === "reservation" ? "active" : ""}>reservation</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-icon' onClick={handleCartClick}>
          <img src={assets.basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Your cart is empty! Please add some items to proceed.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
>>>>>>> Stashed changes
    </div>
  );
};

export default Navbar;
