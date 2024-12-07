import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

const Header = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [
    {
      heading: 'Order your favourite food here',
      text: 'Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.',
      buttonText: 'View Menu',
    },
    {
      heading: 'Fast & Reliable Delivery',
      text: 'Get your meals delivered hot and fresh in record time, wherever you are.',
      buttonText: 'Order Now',
    },
    {
      heading: 'Experience Gourmet Dining',
      text: 'Enjoy restaurant-quality meals prepared by top chefs, right at your doorstep.',
      buttonText: 'Explore Dishes',
    },
  ];

  return (
    <div className="header">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div className="header-slide" key={index}>
            <div className="header-contents">
              <h2>{slide.heading}</h2>
              <p>{slide.text}</p>
              <a href="#explore-menu">
                <button>{slide.buttonText}</button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
