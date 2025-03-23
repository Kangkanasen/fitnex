import fitnexLogo from './fitnexLogo.png';
import './style.css';

function Nav() {
    return (
        <div className="container">
            <nav className="DeskHeader row align-items-center">
                <div className="logoWrap col-lg-4">
                    <img src={fitnexLogo} alt="Logo" />
                </div>
                <div className="menuWrap col-lg-6">
                    <ul className="d-flex justify-content-between">
                        <li>Home</li>
                        <li>Programs</li>
                        <li>Plans</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="btnWrap col-lg-2 d-flex justify-content-end">
                    <a href="/">Sign Up</a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
