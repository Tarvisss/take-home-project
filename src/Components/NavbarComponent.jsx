import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <div className="d-flex justify-content-between w-100 align-items-center">
        <Navbar.Brand href="/" className="text-shadow fs-3 fw-italic d-flex align-items-center gap-2">
        <img
        src="public/b0800ba0-8f26-4825-9ca6-8ae9641b1698.png"
        alt="Logo"
        height="50"
        className="d-inline-block align-top"
        />
        For Fun
        </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/Users">User List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/users/:id">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Back to homepage</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
