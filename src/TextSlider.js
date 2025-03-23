import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TextSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,            
    verticalSwiping: true, 
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
       <div className='eachText'>Personal Trainers Committed to Your Progress</div>
                       
       <div className='eachText'>Build strength and gain confidence.</div>
                       
       <div className='eachText'>Improve and enhance focus, boost confidence.</div>
                       
    </Slider>
  );
};

export default TextSlider;
