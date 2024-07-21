import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './OrderComplete.css';

const OrderComplete = () => {
  const { clearCart } = useContext(StoreContext);

  // Clear cart when component is mounted
  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="order-complete">
      <div className="animation">
        <div className="checkmark"></div>
      </div>
      <h2>Order Completed Successfully!</h2>
      <p>Thank you for your purchase. Your order has been placed and will be processed shortly.</p>
    </div>
  );
};

export default OrderComplete;
