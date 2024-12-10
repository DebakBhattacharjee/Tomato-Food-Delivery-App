import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ShippingForm.css";

const ShippingForm = ({ onBack, onNext }) => {
  const { cartItems, food_list, currency, getTotalCartAmount, deliveryCharge } =
    useContext(StoreContext);
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isCODSelected, setIsCODSelected] = useState(false);
  const [showPopup, setShowPopup] = useState({ message: "", show: false });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      if (user) {
        try {
          const userData = JSON.parse(user);
          const { name, address, phone, email } = userData;
          setUserName(name);
          setAddress(address);
          setPhone(phone);
          setEmail(email);
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        console.log("User data is not available in localStorage");
      }
    }
  }, []);

  const cartTotal = getTotalCartAmount();
  const grandTotal = cartTotal + deliveryCharge;

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
            Next
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
