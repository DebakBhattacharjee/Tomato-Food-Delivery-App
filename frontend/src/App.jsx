
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import ResForm from './components/ResForm/ResForm'
import Checkout from './components/Checkout/Checkout'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
    <ScrollToTop />
    {showLogin && <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}

      <div className='app'>
      <Navbar setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
        <div className='app-body'>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/order element' element= {<PlaceOrder/>} />
          <Route path = '/reservation' element= {<ResForm/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        </div>
      </div>
    <Footer/>
    </>

  )
}

export default App
