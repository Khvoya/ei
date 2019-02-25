import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
        <Navbar collapseOnSelect="true" sticky="top" expand="md" variant="dark">
          <Navbar.Brand href="#" className="Header__logo"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between justify-content-lg-around justify-content-xl-around container-fluid mr-auto">
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#News">News</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link" >
                <Nav.Link href="#Band">Band</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#Video">Video</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#Photo">Photo</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#Shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#Concets">Concerts</Nav.Link>
              </Nav.Item>
              {/*<Navbar.Brand href="#" className="Header__lang">*/}
              {/*</Navbar.Brand>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
