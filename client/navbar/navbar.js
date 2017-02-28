import React from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

class NavbarMenu extends React.Component {
  constructor() {
    super()
  }
  render() {
    const navbarInstance = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Alt Legal Logo</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Features</NavItem>
          <NavItem eventKey={2} href="#">Testimonials</NavItem>
          <NavItem eventKey={3} href="#">About</NavItem>
          <NavItem eventKey={4} href="#">Contact</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Sign In</NavItem>
          <NavItem eventKey={2} href="#"><span id="button-signup">Sign Up</span></NavItem>
        </Nav>
      </Navbar>
    )
    return (
      <div className="navbar">
        {navbarInstance}
      </div>
    )
  }
}

export default NavbarMenu;
