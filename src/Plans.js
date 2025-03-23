function Plans() {
    return (
        <div className="programs commonSection">
            <div className="container">
                <h2 className='text-center'>CHOOSE YOUR PATH TO <span className='red-text'> BUDGET</span></h2>
                <div id="slider">
                    <input type="radio" name="slider" id="s1" defaultChecked />
                    <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" />
                    {/* plan one */}
                    <label htmlFor="s1" id="slide1">
                        <div className="mostPtag">MOST POPULAR</div>
                        <h5 className="planName">Elite</h5>
                        <h4 className="planPrice">₹1099 <span>/month</span></h4>
                        <ul>
                            <li className="yIcon">Unlimited access to Elite workout programs.</li>
                            <li className="yIcon">Includes both gym and home workout routines.</li>
                            <li className="yIcon">Access to all structured workout programs.</li>
                            <li className="yIcon">Custom meal plans tailored to personal goals.</li>
                            <li className="yIcon">Exclusive access to advanced fitness content.</li>
                            <li className="yIcon">Priority access to one-on-one coaching.</li>
                            <li className="yIcon">Early access to new workout programs and live training sessions.</li>
                            <li className="yIcon">Progress tracking and performance analytics to optimize training.</li>
                        </ul>
                        <a href="/" className="buyBtn">Choose plan</a>
                    </label>
                    {/* plan two */}
                    <label htmlFor="s2" id="slide2">
                    <h5 className="planName">Pro</h5>
                        <h4 className="planPrice">₹1099 <span>/month</span></h4>
                        <ul>
                            <li className="yIcon">Unlimited access to Elite workout programs.</li>
                            <li className="yIcon">Includes both gym and home workout routines.</li>
                            <li className="yIcon">Choose up to two structured programs to follow.</li>
                            <li className="yIcon">One customized meal plan to support fitness goals.</li>
                            <li className="yIcon">Exclusive premium fitness articles and in-depth guides.</li>
                            <li className="yIcon">Access to advanced video workouts and technique breakdowns.</li>
                            <li className="noIcon">No personalized coaching or one-on-one guidance.</li>
                            <li className="noIcon">No custom meal plans beyond the standard options.</li>
                        </ul>
                        <a href="/" className="buyBtn">Choose plan</a>
                    </label>
                    {/* plan three */}
                    <label htmlFor="s3" id="slide3">
                    <h5 className="planName">Free</h5>
                        <h4 className="planPrice">₹1099 <span>/month</span></h4>
                        <ul>
                            <li className="yIcon">Access to basic workout programs (limited options).</li>
                            <li className="yIcon">Access to basic workout programs (limited options).</li>
                            <li className="yIcon">Join the Fitnex community for motivation and discussions.</li>
                            <li className="noIcon">No credit card required – start for free anytime.</li>
                            <li className="noIcon">No personalized workout plans – only general routines.</li>
                            <li className="noIcon">No meal plans – users must manage nutrition independently.</li>
                            <li className="noIcon">Limited access to video workouts (only previews or basic tutorials).</li>
                            <li className="noIcon">No progress tracking or premium features.</li>
                        </ul>
                        <a href="/" className="buyBtn">Choose plan</a>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Plans;