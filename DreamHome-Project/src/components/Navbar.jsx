import React, { useState } from 'react';
import logo from './../assets/Icons/Realtor9.svg';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="md"
      style={{ zIndex: '11' }}
      className="navbar navbar-NavLink p-0 shadow-sm position-fixed top-0 bg-white w-100 overflow-hidden"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img className='navbar-brand p-0' src={logo} alt="Website-Logo" width="90" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
        />
        <Navbar.Collapse id="navbarNav" className='justify-content-end'>
          <Nav className="ml-md-auto gap-2 gap-md-4 px-2 px-md-0 align-items-md-center align-items-start">
            <Nav.Link as={NavLink} to="/" className="text-decoration-none font-color-primary fw-medium">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="text-decoration-none font-color-primary fw-medium">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/blogs" className="text-decoration-none font-color-primary fw-medium">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-decoration-none font-color-primary fw-medium">Contact</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/residential" className="text-decoration-none font-color-primary fw-medium">Residential</Nav.Link> */}
            <button onClick={() => navigate("/login")} className='button-hover-secondary background-color-secondary fs-6 fw-medium text-white border-0 rounded px-4 py-2'>Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
