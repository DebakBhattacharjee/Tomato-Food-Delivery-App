// src/components/PaymentForm.js
import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ onBack, onNext }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ payment: paymentData });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Payment Information</h2>
      <div>
        <label>Card Number</label>
        <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Expiry Date</label>
        <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} required />
      </div>
      <div>
        <label>CVV</label>
        <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} required />
      </div>
      <div>
        <label>Name on Card</label>
        <input type="text" name="nameOnCard" value={paymentData.nameOnCard} onChange={handleChange} required />
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
