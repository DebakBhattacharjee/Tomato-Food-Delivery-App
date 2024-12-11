import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
      <div className="section-gradient-bg"></div>
        <div className="footer-content-left">
          <div>
          <img className='LogoImg' src={assets.logo} alt="" />
          <div className="menu-line1"></div>
          </div>
          
          <p>“Good food is the foundation of genuine happiness.” <br />
          34-B, Belvedere Rd, Alipore, Kolkata, West Bengal 700027
          </p>
          <div className="footer-social-icons">
            <img className='foot-icons' src={assets.facebook_icon} alt="" />
            <img className='foot-icons' src={assets.twitter_icon} alt="" />
            <img className='foot-icons' src={assets.linkedin_icon} alt="" />
            
          </div>
        </div>
        <div className="footer-content-center">
          <div>
          <h2>COMPANY</h2>
          <div className="menu-line1"></div>
          </div>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
         <div>
         <h2>GET IN TOUCH</h2>
         <div className="menu-line2"></div>
         </div>
          <ul>
            <li>+1-234-234-987</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>© Copoyright 2024 Tomato- All Rights Reserved by Tanmay & Debak</p>

    </div>
  )
}

export default Footer
