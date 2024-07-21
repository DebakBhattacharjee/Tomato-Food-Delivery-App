// src/components/ShippingForm.js
import React, { useState } from 'react';
import './ShippingForm.css';

const ShippingForm = ({ onNext }) => {
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    zip: '',
    city: '',
    state: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ shipping: shippingData });
  };

  return (
    <form onSubmit={handleSubmit} className="shipping-form">
      <h2>Shipping Address</h2>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={shippingData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={shippingData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Address 1</label>
        <input type="text" name="address1" value={shippingData.address1} onChange={handleChange} required />
      </div>
      <div>
        <label>Address 2</label>
        <input type="text" name="address2" value={shippingData.address2} onChange={handleChange} />
      </div>
      <div>
        <label>Zip</label>
        <input type="text" name="zip" value={shippingData.zip} onChange={handleChange} required />
      </div>
      <div>
        <label>City</label>
        <input type="text" name="city" value={shippingData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>State</label>
        <input type="text" name="state" value={shippingData.state} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={shippingData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={shippingData.email} onChange={handleChange} required />
      </div>
      <button className='shippingform-button' type="submit">Next</button>
    </form>
  );
};

export default ShippingForm;
