import React from 'react';
import './Benefits.css'

const Benefits = () => {
  return (
    <div className="benefits-section">
      <h2>Benefits Using Our Services</h2>
      <div className="menu-line"></div>
      <div className="benefits-container">
        <div className="benefit-item">
          <img  src="https://png.pngtree.com/png-vector/20190309/ourmid/pngtree-premium-quality-label-png-image_784322.jpg" alt="Best Quality" />
          <h3>Best Quality</h3>
          <p>We ensure that the products we provide are of the highest quality.</p>
        </div>
        <div className="benefit-item">
          <img src="https://www.pngitem.com/pimgs/m/437-4374568_transparent-individual-icon-png-cost-saving-logo-png.png" alt="Free Shipping" />
          <h3>Cost Effective</h3>
          <p>We offer the best price, so you can order with ease.</p>
        </div>
        <div className="benefit-item">
          <img src="https://www.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-600nw-1145000942.jpg" alt="Warranty" />
          <h3>Fast Delivery</h3>
          <p>Craving something? We deliver dreams in record time.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
