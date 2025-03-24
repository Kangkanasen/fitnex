import HeroImg from "./img/heroImg.png";
import Person from "./img/person.png";
import Person2 from "./img/person2.png";
import TextSlider from "./TextSlider";
import Qslider from './Qslider';
import Qslidert from './Qslidert';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import './style.css';

function Hero() {
    useEffect(() => {
        gsap.fromTo('.animated-text',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', stagger: 0.2 }
        );
    }, []);

    return (
        <div className="hero ">
            <div className='container'>
                <div className='row align-items-center mobV'>
                    <div className="counterSection col-lg-2 col-md-12 order-md-last order-sm-last col-sm-12">
                        <div className="eachItem animated-text">
                            <div className="number red-text">
                                <span>120</span>+
                            </div>
                            <div className="text">Certified Trainers</div>
                        </div>
                        <div className="eachItem animated-text">
                            <div className="number red-text">
                                <span>2.4</span>k
                            </div>
                            <div className="text"> Success Stories</div>
                        </div>
                        <div className="eachItem animated-text">
                            <div className="number red-text">
                                <span>11</span>k+
                            </div>
                            <div className="text">Happy Members</div>
                        </div>
                    </div>
                    <div className='imageSection col-lg-5 col-md-6 col-sm-6'>
                        <div className='imgCon'>
                            <img src={HeroImg} alt="Hero" />
                        </div>
                    </div>
                    <div className='textSection col-lg-5 col-md-6 col-sm-6'>
                        <h2 className='animated-text'>ACHIEVE PEAK PERFORMANCE WITH <span className='red-text'>EXPERT TRAINING</span></h2>

                        <div className='joinMember'>
                            <div className='smlImgCon d-flex'>
                                <div className='smlImg'><img src={Person} alt='person'></img></div>
                                <div className='smlImg'><img src={Person2} alt='person'></img></div>
                                <div className='smlImg'><a href='/'>+</a></div>
                            </div>
                            <div className='infoText animated-text'>
                                <h4><span>40</span>K +</h4>
                                <p>Yearly Member Join</p>
                            </div>

                        </div>
                        <div className='textSlider'>
                            <TextSlider />
                        </div>
                        <a href="/" className="joinBtn animated-text">Join Now</a>
                    </div>
                </div>
            </div>
            <div className='heroEnd'>
                <div className='sliderLeft'>
                    <Qslider />
                </div>
                <div className='sliderRight'>
                    <Qslidert />
                </div>
            </div>
        </div>

    );
};

export default Hero;