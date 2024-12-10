import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedState = localStorage.getItem('storeState');
    return savedState ? JSON.parse(savedState).cartItems : {}; // Default to empty cart
  });

  const [deliveryCharge, setDeliveryCharge] = useState(() => {
    const savedState = localStorage.getItem('storeState');
    return savedState ? JSON.parse(savedState).deliveryCharge : 10; // Default delivery charge
  });

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      persistStoreState(newCartItems, deliveryCharge);
      return newCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }
      persistStoreState(newCartItems, deliveryCharge);
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
    setDeliveryCharge(10);
    persistStoreState({}, 10); // Reset both cart and delivery charge
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find((item) => item._id === itemId);
      return item ? total + item.price * cartItems[itemId] : total;
    }, 0);
  };

  const applyPromoCode = (code) => {
    if (code === 'FREEDEL') {
      setDeliveryCharge(0);
      persistStoreState(cartItems, 0); // Persist updated delivery charge
      alert('Promo code applied successfully! Delivery is now free.');
    } else {
      alert('Invalid promo code. Please try again.');
    }
  };

  const persistStoreState = (cartItems, deliveryCharge) => {
    const storeState = { cartItems, deliveryCharge };
    localStorage.setItem('storeState', JSON.stringify(storeState));
  };

  useEffect(() => {
    persistStoreState(cartItems, deliveryCharge);
  }, [cartItems, deliveryCharge]);

  const contextValue = {
    food_list,
    setCartItems,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    deliveryCharge,
    setDeliveryCharge,
    applyPromoCode,
    clearCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
