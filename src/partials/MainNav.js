import React from 'react';

const MainNav = ({ title, src }) => {

  return (
    
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-3">
      <div className="container-fluid justify-content-md-center">

        {/* Custom logo */}
        <a className="navbar-brand" href="/">
          <img src={src} alt="Dila Logo" width="40" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-center flex-grow-0" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${title === "Home" ? 'active' : ''}`}>
              <a className={`nav-link`} href="/">Home</a>
            </li>
            <li className={`nav-item ${title === "About Me" ? 'active' : ''}`}>
              <a className={`nav-link`} href="/about">About Me</a>
            </li>
            <li className={`nav-item ${title === "Projects" ? 'active' : ''}`}>
              <a className={`nav-link`} href="/projects">Projects</a>
            </li>
            <li className={`nav-item ${title === "Services" ? 'active' : ''}`}>
              <a className={`nav-link`} href="/services">Services</a>
            </li>
            <li className={`nav-item ${title === "Contact" ? 'active' : ''}`}>
              <a className={`nav-link`} href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
