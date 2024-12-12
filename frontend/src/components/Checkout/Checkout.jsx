// src/components/Checkout.js
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import ShippingForm from '../ShippingForm/ShippingForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import OrderComplete from '../OrderComplete/OrderComplete';
import CartPage from '../../pages/Cart/Cart';
import { StoreContext } from '../../context/StoreContext';
import './Checkout.css';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    shipping: {},
    payment: {},
  });
  const { clearCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleNext = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const handleBacktocart=()=>{
    navigate('/cart');
  };
  const handleOrderComplete = () => {
    clearCart(); // Clear the cart
    setCurrentStep(3); // Proceed to OrderComplete
  };

  return (
    <div className="checkout">
      {currentStep === 1 && <ShippingForm onBack={handleBacktocart} onNext={handleNext} />}
      {/* {currentStep === 2 && <PaymentForm onBack={handleBack} onNext={handleNext} />} */}
      {currentStep === 2 && <OrderComplete onComplete={handleOrderComplete} />}
    </div>
  );
};

export default Checkout;
