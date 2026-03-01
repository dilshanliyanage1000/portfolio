import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MainLogo from '../assets/img/dila_logo_bw.png';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavigationBar = () => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-white">

            <div className="container-fluid" style={{ marginLeft: "1rem", marginRight: "1rem" }}>

                <Link to="/portfolio/">
                    <img src={MainLogo} alt="Dila Logo" width="45" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-center flex-grow-0" id="navbarNav">

                    <ul className="navbar-nav ml-auto">

                        <Link
                            to="/portfolio/"
                            className={`nav-link gsf-light fs-5 ${isActive("/portfolio/") ? "active-link" : ""}`}
                        >
                            Work
                        </Link>

                        <Link
                            to="/portfolio/aboutme"
                            className={`nav-link gsf-light fs-5 ${isActive("/portfolio/aboutme") ? "active-link" : ""}`}
                        >
                            About Me
                        </Link>

                        <Link
                            to="/portfolio/contact"
                            className={`nav-link gsf-light fs-5 ${isActive("/portfolio/contact") ? "active-link" : ""}`}>
                            Contact
                        </Link>

                        <Link
                            type="button"
                            className="nav-link gsf-regular fs-5"
                            to="https://www.linkedin.com/in/dilaliyanage/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Dilshan Liyanage on LinkedIn, opens in a new tab">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </Link>
                    </ul>

                </div>

            </div>

        </nav>
    )
};

export default NavigationBar;