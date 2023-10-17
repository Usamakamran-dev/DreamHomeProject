import React, { useState } from 'react';
import logo from './../assets/Icons/Realtor9.svg';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { setIsOpen(!isOpen) };
  return (
    <nav className="navbar navbar-expand-md navbar-NavLinkght p-0 shadow-sm overflow-hidden">
      <div className="container d-flex flex-row justify-content-between">
          <NavLink to="/">
          <img className='navbar-brand p-0' src={logo} alt="Website-Logo" width="100" height="auto"/>
          </NavLink>
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
        <div className={`collapse navbar-collapse d-flex flex-row p-0 justify-content-end ${isOpen ? 'show' : ''} `} id="navbarNav">
          <ul className="navbar-nav d-flex flex-row align-items-center gap-5">
            <NavLink 
               className="text-decoration-none font-color-primary fw-medium"  to="/">Home
            </NavLink>
            <NavLink 
               className="text-decoration-none font-color-primary fw-medium"  to="/projects">Projects
            </NavLink>
            <NavLink 
               className="text-decoration-none font-color-primary fw-medium"  to="/blogs">Blogs
            </NavLink>
            <NavLink 
               className="text-decoration-none font-color-primary fw-medium"  to="/contact">Contact
            </NavLink>
            <button onClick={()=> navigate("/login")}
            className='button-hover-secondary background-color-secondary fs-6 fw-medium text-white border-0 rounded px-4 py-2'>Log In</button>
          </ul>
        </div>
      </div>
    </nav> 
    );}
    export default Navbar;
