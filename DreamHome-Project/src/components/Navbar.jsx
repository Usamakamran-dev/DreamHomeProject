import React, { useState } from 'react';
import logo from './../assets/Icons/Realtor9.svg';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  return (
    <Navbar
      expand="md"
      style={{ zIndex: '11' }}
      className="navbar navbar-NavLink p-0 shadow-sm position-fixed top-0 bg-white w-100 overflow-hidden"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={closeMenu}>
          <img className='navbar-brand p-0' src={logo} alt="Website-Logo" width="90" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
        />
        <Navbar.Collapse id="navbarNav" className='justify-content-end'>
          <Nav className="ml-md-auto gap-3 gap-md-5 px-1 align-items-md-center py-md-0 py-2 align-items-start">
            <Nav.Link as={NavLink} to="/" onClick={closeMenu}  className="text-decoration-none font-color-primary fw-medium fs-mobile p-0">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" onClick={closeMenu}  className="text-decoration-none font-color-primary fw-medium fs-mobile p-0">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/blogs" onClick={closeMenu}  className="text-decoration-none font-color-primary fw-medium fs-mobile p-0">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={closeMenu}  className="text-decoration-none font-color-primary fw-medium fs-mobile p-0">Contact</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/projectForm" onClick={closeMenu}  className="text-decoration-none font-color-primary fw-medium fs-mobile p-0">Project Form</Nav.Link> */}
            {/* <Nav.Link as={NavLink} to="/residential" onClick={closeMenu} className="text-decoration-none font-color-primary fw-medium fs-mobile p-0">Residential</Nav.Link> */}
            <button onClick={() => { navigate("/login"); closeMenu(); }} className='button-hover-secondary background-color-secondary fw-medium fs-6 text-white border-0 rounded px-3 py-1 px-md-4 py-md-2'>Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
