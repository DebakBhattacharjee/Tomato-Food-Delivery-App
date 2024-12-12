import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ShippingForm.css";
const token = localStorage.getItem('token'); 

const ShippingForm = ({ onBack, onNext }) => {
  const { cartItems, food_list, currency, getTotalCartAmount, deliveryCharge } =
    useContext(StoreContext);
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isCODSelected, setIsCODSelected] = useState(false);
  const [showPopup, setShowPopup] = useState({ message: "", show: false });

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('https://tomato-food-delivery-app-c3fj.onrender.com/get-user-details', { // Make sure this URL is correct
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache', // Prevent the browser from caching the request
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
     
      if (data.user) {
      
        setUserName(data.user.name); // Set the user name from the response
        setAddress(data.user.address);
        setPhone(data.user.phone);
        setEmail(data.user.email);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const cartTotal = getTotalCartAmount();
  const grandTotal = cartTotal + deliveryCharge;
  fetchUserData(token);
  const handleNext = () => {
    if (isCODSelected) {
      onNext();
    } else {
      setShowPopup({
        message: "Please select Cash on Delivery to proceed.",
        show: true,
      });
    }
  };

  const closePopup = () => {
    setShowPopup({ message: "", show: false });
  };

  return (
    <div className="shipping-container">
      {showPopup.show && (
        <div className="popup">
          <div className="popup-content">
            <p>{showPopup.message}</p>
            <button className="popupCloseButton" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="order-summary-container">
        <div className="order-summary">
          <h2 className="orderSummaryHeading">Order Summary</h2>
          <div className="menu-line"></div>
          <ul>
            {food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <li key={item._id} className="cart-item">
                    <span>
                      {item.name} x {cartItems[item._id]} - {currency}
                      {(item.price * cartItems[item._id]).toFixed(2)}
                    </span>
                    <img
                      className="cart-item-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <hr />
          <div className="totalAmount">
            <p>
              <strong>Subtotal:</strong> {currency}
              {cartTotal.toFixed(2)}
            </p>
            <p>
              <strong>Delivery Fee:</strong> {currency}
              {deliveryCharge.toFixed(2)}
            </p>
            <div>
              <strong>Total:</strong> {currency}
              {grandTotal.toFixed(2)}
            </div>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={isCODSelected}
              onChange={() => setIsCODSelected(true)}
            />
            <label htmlFor="cod">Cash on Delivery (COD)</label>
          </div>
          <div className="address-card">
            <h3>Shipping Address</h3>
            {userName || address || phone || email ? (
              <p>
                <strong>Name:</strong> {userName} <br />
                <strong>Phone:</strong> {phone} <br />
                <strong>Email:</strong> {email} <br />
                <strong>Address:</strong> {address} <br />
              </p>
            ) : (
              <p>Address details are missing.</p>
            )}
          </div>
          <button className="shippingform-button back-button" onClick={onBack}>
            Back
          </button>
          <button className="shippingform-button" onClick={handleNext}>
            Pay
          </button>
        </div>
      </div>

      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1733822986/Colorful_Freelancer_YouTube_Thumbnail_1_btkou5.png"
          alt="Promotional or relevant image"
          className="side-image"
        />
      </div>
    </div>
  );
};

export default ShippingForm;
