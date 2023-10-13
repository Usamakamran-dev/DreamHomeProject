import React, { useState } from 'react';
import logo from './../assets/Icons/Realtor9.svg';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { setIsOpen(!isOpen) };
  return (
    <nav className="navbar navbar-expand-md navbar-NavLinkght p-0 shadow-sm">
      <div className="container d-flex flex-row justify-content-between">
          <img className='navbar-brand p-0' src={logo} alt="Website-Logo" width="100" height="auto"/>
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
        <div className={`collapse navbar-collapse d-flex flex-row gap-5 p-0 justify-content-end ${isOpen ? 'show' : ''} `} id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <NavLink 
               className="text-decoration-none font-color-primary fw-semibold"  to="/">Home
            </NavLink>
            <NavLink 
               className="text-decoration-none font-color-primary fw-semibold"  to="/projects">Projects
            </NavLink>
            <NavLink 
               className="text-decoration-none font-color-primary fw-semibold"  to="/blogs">Blogs
            </NavLink>
            <NavLink 
               className="text-decoration-none font-color-primary fw-semibold"  to="/contact">Contact
            </NavLink>
          </ul>
          <button className='background-color-secondary fw-semibold text-white border-0 rounded px-3 py-1'>Log In</button>
        </div>
      </div>
    </nav> 
    );}
    export default Navbar;
