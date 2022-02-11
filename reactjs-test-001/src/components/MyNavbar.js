import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../logo.svg';
// import Component1 from './Component1.js'

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        // TODO set initial state
    }
    render() {
        return (<>
            <Navbar bg="dark" variant="dark">
              <Container>
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
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
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