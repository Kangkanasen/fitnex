import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import program1 from "./img/program1.png";
import program2 from "./img/program2.png";
import program3 from "./img/program3.png";


const Program = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode:true,
                }
            },
        ]
    };

    return (
        <div className="programs commonSection">
            <div className="container">
                <h2 className='animated-text text-center'>CHOOSE YOUR PATH TO <span className='red-text'> FITNESS</span></h2>

                <div className="programSlider">
                    <Slider {...settings}>
                        {/* card 1 */}
                        <div className="programCard">
                            <div className="innercard">
                                <div className="cardImage"><img src={program1} alt="program" /></div>
                                <div className="cardText">
                                    <h4>STRENGTH TRAINING</h4>
                                    <p>Build muscle, increase stamina.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="programCard">
                            <div className="innercard">
                                <div className="cardImage"><img src={program2} alt="program" /></div>
                                <div className="cardText">
                                    <h4>STRENGTH TRAINING</h4>
                                    <p>Build muscle, increase stamina.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="programCard">
                            <div className="innercard">
                                <div className="cardImage"><img src={program3} alt="program" /></div>
                                <div className="cardText">
                                    <h4>STRENGTH TRAINING</h4>
                                    <p>Build muscle, increase stamina.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="programCard">
                            <div className="innercard">
                                <div className="cardImage"><img src={program1} alt="program" /></div>
                                <div className="cardText">
                                    <h4>STRENGTH TRAINING</h4>
                                    <p>Build muscle, increase stamina.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className="programCard">
                            <div className="innercard">
                                <div className="cardImage"><img src={program2} alt="program" /></div>
                                <div className="cardText">
                                    <h4>STRENGTH TRAINING</h4>
                                    <p>Build muscle, increase stamina.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="programCard">
                            <div className="innercard">
                                <div className="cardImage"><img src={program3} alt="program" /></div>
                                <div className="cardText">
                                    <h4>STRENGTH TRAINING</h4>
                                    <p>Build muscle, increase stamina.</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>

    );
};





export default Program;