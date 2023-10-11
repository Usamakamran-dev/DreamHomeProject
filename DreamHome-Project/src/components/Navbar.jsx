import React, { useState } from 'react';
import logo from './../assets/Icons/Realtor9.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { setIsOpen(!isOpen) };

  return (
    <nav className="navbar navbar-expand-md navbar-light p-0">
      <div className="container d-flex flex-row justify-content-between">
          <img className='navbar-brand p-0' src={logo} alt="Website-Logo" width="120" height="auto"/>
        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse p-0 justify-content-end ${isOpen ? 'show' : ''} `} id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <a className="text-decoration-none font-color-primary fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="text-decoration-none font-color-primary fw-semibold" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="text-decoration-none font-color-primary fw-semibold" href="#">Partner</a>
            </li>
            <li className="nav-item">
              <a className="text-decoration-none font-color-primary fw-semibold" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="text-decoration-none font-color-primary fw-semibold" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
