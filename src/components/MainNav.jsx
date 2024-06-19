import React from 'react';
import { Link } from "react-router-dom";
import MainLogo from '../assets/img/dila_logo.png';

const MainNav = ({ title }) => {

  return (

    <nav className="navbar navbar-expand-lg fixed-top frosted-glass">
      <div className="container-fluid justify-content-lg-center">

        <Link className={`navbar-brand`} to="/">
          <img src={MainLogo} alt="Dila Logo" width="45" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-center flex-grow-0" id="navbarNav">
          <ul className="navbar-nav ml-auto">

            <li className={`nav-item ${title === "Home" ? 'active' : ''}`}>
              <Link className={`nav-link ${title === "Home" ? 'active' : ''}`} to="/">Home</Link>
            </li>

            <li className={`nav-item ${title === "Projects" ? 'active' : ''}`}>
              <Link className={`nav-link ${title === "Projects" ? 'active' : ''}`} to="/projects">Projects</Link>
            </li>

            <li className={`nav-item ${title === "Gallery" ? 'active' : ''}`}>
              <Link className={`nav-link ${title === "Gallery" ? 'active' : ''}`} to="/gallery">Gallery</Link>
            </li>

            <li className={`nav-item ${title === "Contact" ? 'active' : ''}`}>
              <Link className={`nav-link ${title === "Contact" ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
