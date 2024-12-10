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
     <img src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1733849999/Animation_-_1733849936889_hbcwx3.gif" alt="" />
      <h2>Order Completed Successfully!</h2>
      <p>Thank you for your purchase. Your order has been placed and will be processed shortly.</p>
      {/* <div className='deliveryImageContainer'>
        <video className='delvideo' src="https://res.cloudinary.com/dy3g1sjfe/video/upload/v1733852013/Untitled_design_gsyuye.mp4"></video>
       </div> */}
    </div>
    
  );
};

export default OrderComplete;
