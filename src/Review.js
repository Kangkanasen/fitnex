import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rperson1 from "../src/img/rperson1.png";
import rperson2 from "../src/img/rperson2.png";
import rperson3 from "../src/img/rperson3.png";
import stars from "../src/img/stars.png";

const Review = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3.9,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        cssEase: 'linear',
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2.5,
                    centerMode:true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    }

    return (
        <section className="review commonSection">
            <div className="container">
                <h2 className='text-center'>CUSTOMER SAID ABOUT <span className='red-text'> FITNEX</span></h2>

                <Slider {...settings}>
                    {/* one */}
                    <div className='eachReview'>
                        <div className="reviewInner">
                            <div className="reviewer">
                                <div className='reviewerImg'><img src={rperson1} alt='person' /></div>
                                <div className="reviewerInfo">
                                    <h3>John Doe</h3>
                                    <p>Customer</p>
                                </div>
                            </div>
                            <div className="reviewText">
                                <p>It was a great experience with Fitnex. The staff was very helpful and</p>
                            </div>
                            <div className='rating'><img src={stars} alt='rating' /></div>
                        </div>
                    </div>
                    {/* two */}
                    <div className='eachReview'>
                        <div className="reviewInner">
                            <div className="reviewer">
                                <div className='reviewerImg'><img src={rperson2} alt='person' /></div>
                                <div className="reviewerInfo">
                                    <h3>John Doe</h3>
                                    <p>Customer</p>
                                </div>
                            </div>
                            <div className="reviewText">
                                <p> It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                            </div>
                            <div className='rating'><img src={stars} alt='rating' /></div>
                        </div>
                    </div>
                    {/* three */}
                    <div className='eachReview'>
                        <div className="reviewInner">
                            <div className="reviewer">
                                <div className='reviewerImg'><img src={rperson3} alt='person' /></div>
                                <div className="reviewerInfo">
                                    <h3>John Doe</h3>
                                    <p>Customer</p>
                                </div>
                            </div>
                            <div className="reviewText">
                                <p>It was a great experience with Fitnex. The staff was very helpful and</p>
                            </div>
                            <div className='rating'><img src={stars} alt='rating' /></div>
                        </div>
                    </div>
                    {/* four */}
                    <div className='eachReview'>
                        <div className="reviewInner">
                            <div className="reviewer">
                                <div className='reviewerImg'><img src={rperson1} alt='person' /></div>
                                <div className="reviewerInfo">
                                    <h3>John Doe</h3>
                                    <p>Customer</p>
                                </div>
                            </div>
                            <div className="reviewText">
                                <p>It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                            </div>
                            <div className='rating'><img src={stars} alt='rating' /></div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};


export default Review;