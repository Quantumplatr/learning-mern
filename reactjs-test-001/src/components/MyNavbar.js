import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
// import Component1 from './Component1.js'

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    // TODO set initial state
  }
  render() {
    return (<>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Link to="/">

            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/test">
                Test
              </Link>
            </Nav.Link>
            <Nav.Link href="#link1">Link 1</Nav.Link>
            <Nav.Link href="#link2">Link 2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
  }
}
export default MyNavbar;