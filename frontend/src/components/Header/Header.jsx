import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu feature a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <a href='#explore-menu' > <button>View Menu</button></a> 
      </div>
    </div>
  )
}

export default Header
