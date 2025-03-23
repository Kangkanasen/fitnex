import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Subtrack from './img/Subtract.png'

const Qslider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    rtl: true,
    dots:false,
    arrows:false,
  };

  return (
    <Slider {...settings}>
      <div className='eachText'> <div className='innerText'><img src={Subtrack} alt='icon'/> Gym News</div></div>

      <div className='eachText'> <div className='innerText'><img src={Subtrack} alt='icon'/> Wellness Articles </div></div>

      <div className='eachText'> <div className='innerText'><img src={Subtrack} alt='icon'/> Gym Highlights</div> </div>

      <div className='eachText'> <div className='innerText'><img src={Subtrack} alt='icon'/> Nutrition Advice </div></div>

      <div className='eachText'><div className='innerText'> <img src={Subtrack} alt='icon'/> Workout Routines </div></div>

      <div className='eachText'> <div className='innerText'><img src={Subtrack} alt='icon'/> Fitness Tips</div> </div>

      <div className='eachText'><div className='innerText'> <img src={Subtrack} alt='icon'/> Gym Highlights</div> </div>

      <div className='eachText'><div className='innerText'> <img src={Subtrack} alt='icon'/> Gym News</div> </div>

      <div className='eachText'><div className='innerText'> <img src={Subtrack} alt='icon'/> Workout Routines</div> </div>

    </Slider>
  );
};

export default Qslider;
