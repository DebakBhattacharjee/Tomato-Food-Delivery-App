import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <div className='app-download-content'>
        <div className='app-download-text'>
          <h1>For Better Experience Download Tomato App</h1>
          <p>Get the app now and enjoy a seamless experience on your mobile device.</p>
          <div className='app-download-platforms'>
            <img src={assets.play_store} alt="Download on Play Store" />
            <img src={assets.app_store} alt="Download on App Store" />
          </div>
        </div>
        <div className='app-download-image'>
          <img src={assets.mobile_app} alt="Tomato App" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
