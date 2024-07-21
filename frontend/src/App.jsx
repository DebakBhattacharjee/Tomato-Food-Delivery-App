
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import ResForm from './components/ResForm/ResForm'
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/order element' element= {<PlaceOrder/>} />
          <Route path = '/reservation' element= {<ResForm/>} />
        </Routes>
      </div>
    <Footer/>
    </>

  )
}

export default App
