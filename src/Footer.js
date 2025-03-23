import fitnexLogo from '../src/img/fitnexLogo.png';
import fbIcon from '../src/img/fbIcon.png';
import igIcon from '../src/img/igIcon.png';
import twitterIcon from '../src/img/twitterIcon.png';
import linkdinIcon from '../src/img/linkdinIcon.png';

function Footer() {
    return (
        <div className="footerWrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <ul>
                            <li><a href="/"><img src={fitnexLogo} alt="Fitnex Logo" className="logo"/></a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Blogs</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <h3>Plans</h3>
                            <li><a href="/">Free</a></li>
                            <li><a href="/">Pro</a></li>
                            <li><a href="/">Elite</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <h3>Programs</h3>
                            <li><a href="/">Yoga</a></li>
                            <li><a href="/">Resistance Training</a></li>
                            <li><a href="/">Cardio</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3>Lets  get in touch</h3>
                        <form>
                            <input className="subInput" type="email" name="email" placeholder="Enter your Email" />
                            <input className="submitBtn" type="submit" name="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
                <div className="btmFooter">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><a href="/"><img src={fbIcon} alt="Facebook Icon" className="socialIcon"/></a></li>
                                <li><a href="/"><img src={igIcon} alt="Instagram Icon" className="socialIcon"/></a></li>
                                <li><a href="/"><img  src={twitterIcon} alt="Twitter Icon" className="socialIcon"/></a></li>
                                <li><a href="/"><img src={linkdinIcon} alt="Linkdin Icon" className="socialIcon"/></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p>©2025 FITNEX All rights reserved. Read our Privacy Policy & Terms & Conditions for more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;