import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Canvas } from '../../assets/Images';
console.log(Canvas.Logo);


function Header() {
  return (
    <div className="parent-header shadow-sm px-lg-5 bg-white">
      <Container fluid className="px-0 px-lg-4">
        <Navbar bg="dange" className="py-0" expand="lg">
          <Link to="/"  className="mr-0 mr-lg-5 navbar-brand-ci">
            <img src={Canvas.Logo} className="img-fluid w-100" alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto app-nav pt-5">
              <NavLink activeclassname='active' to="/">university map</NavLink>
              <NavLink activeclassname='active' to="/thekit">the kit</NavLink>
              <NavLink activeclassname='active' to="/people">people</NavLink>
            </Nav>
            <div className="welcome-logout-section align-items-center d-flex">
              <p className="mb-0 welcome-text">welcome, <span className="text-success span-parent">parent / student</span> </p>
              <div className="icon-button mx-2 mx-lg-5">
                <i class="fa bell-fa fa-bell"></i>
                <span className="icon-button__badge">2</span>
              </div>
              <Nav.Link  className="logout-icon d-flex align-items-center"><i class="fa mx-2 fa-sign-out"></i>Log out</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;