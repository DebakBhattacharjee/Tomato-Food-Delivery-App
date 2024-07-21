import React from 'react';
import './ExpandingImages.css'; // Import the CSS file for this component

const ExpandingImages = () => {
  return (
    <div className="expanding-container">
      <div className="expanding-content">
        <div className="expanding-image-container">
          <img
            className="expanding-image image-left"
            src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1721118429/pexels-photo-1199960_cbmllg_c_fill_w_1534_h_650_g3psow.webp" // Replace with your image path
            alt="Image 1"
          />
          <img
            className="expanding-image image-right"
            src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1721112973/header_img_xzxm5d.png" // Replace with your image path
            alt="Image 2"
          />
        </div>
        <div className="expanding-buttons">
          <button className="expanding-btn btn-left">Button 1</button>
          <button className="expanding-btn btn-right">Button 2</button>
        </div>
      </div>
    </div>
  );
};

export default ExpandingImages;
