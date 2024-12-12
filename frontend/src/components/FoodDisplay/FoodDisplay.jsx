import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { useEffect } from 'react';


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      {/* <div className='floating-div'></div> */}
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          const { _id, name, description, price, image, category: itemCategory } = item;
          if (category === "All" || category === itemCategory) {
            return (
              <FoodItem
                key={_id}
                id={_id}
                name={name}
                description={description}
                price={price}
                image={image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
