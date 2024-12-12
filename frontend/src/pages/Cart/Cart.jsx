import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge,
    setDeliveryCharge, // Make sure this function exists in your context
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState({ message: '', show: false });
  const [promoCode, setPromoCode] = useState('');

  const handleCheckoutClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setShowPopup({ message: 'You need to be logged in to proceed to checkout.', show: true });
    } else if (getTotalCartAmount() === 0) {
      setShowPopup({ message: 'Your cart is empty! Please add some items to proceed.', show: true });
    } else {
      navigate('/checkout');
    }
  };

  const handlePromoSubmit = () => {
    if (!promoCode.trim()) {
      setShowPopup({ message: 'You didn\'t enter any promo code.', show: true });
    } else if (promoCode === 'FREEDEL') {
      setDeliveryCharge(0);
      setShowPopup({ message: 'Promo code applied successfully! Delivery is now free.', show: true });
    } else {
      setShowPopup({ message: 'Invalid promo code. Please try again.', show: true });
    }
    setPromoCode('');
  };

  const closePopup = () => {
    setShowPopup({ message: '', show: false });
  };

  const cartTotalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      {showPopup.show && (
        <div className="popup">
          <div className="popup-content">
            <p>{showPopup.message}</p>
            <button className='popupCloseButton' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img className="cart-item-image" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>{currency}{(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p className="cart-items-remove-icon" onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{cartTotalAmount.toFixed(2)}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{cartTotalAmount === 0 ? 0 : deliveryCharge.toFixed(2)}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{cartTotalAmount === 0 ? 0 : (cartTotalAmount + deliveryCharge).toFixed(2)}</b></div>
          </div>
          <button onClick={handleCheckoutClick}>PROCEED TO CHECKOUT</button>
        </div>
       <div className="cart-promocode">
       <div>
          <img className='cart-image' src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1733934740/rb_2148504209_gc5hgl.png" alt="" />
        </div>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder="promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className='promocodeSubmitButton' onClick={handlePromoSubmit}>Submit</button>
            </div>
          </div>
      
       
       </div>
      </div>
    </div>
  );
};

export default Cart;
