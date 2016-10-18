import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends Component {

  render() {
    return (
      <div>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>React!</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/notes'>Notes</Link>
            </NavItem>
            <NavItem>
              <Link to='/calendar'>Calendar</Link>
            </NavItem>
          </Nav>
        </Navbar>
        
        {this.props.children}

      </div>
    );
  }
}

export default Menu;
