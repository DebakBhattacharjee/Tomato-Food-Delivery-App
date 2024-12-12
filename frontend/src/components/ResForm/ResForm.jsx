import React, { useState } from 'react';
import './ResForm.css';

const ResForm = () => {

  return (
    <div className='resform' id='resform'>
      
      <section className="resform-hero">
        <div className="resform-left-section">
          
          <img src="https://res.cloudinary.com/dy3g1sjfe/image/upload/v1721394750/main-wine.c30da0fbd212c48c4fe6_oozsxj.png" alt="Reservation" className="resform-hero-image" />
        </div>
       
        <div className="resform-right-section">
          <form className="resform-reservation-form">
          <div className="section-gradient-bg"></div>
          <h1>Book your reservation</h1>
            <label>Date</label>
            <input type="date" name="date" required />
            
            <label>Time</label>
            <input type="time" name="time" required />
            
            
            <label>Type</label>
            <select name="type" required>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
            
            <button type="submit" className="resform-submit-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ResForm;
