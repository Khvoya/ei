import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
        <Navbar collapseOnSelect="true" sticky="top" expand="md" variant="dark" >
          <Navbar.Brand href="#" className="Header__logo"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-around container-fluid mr-auto">
              {/*<Nav.Item bsPrefix="Header__link">*/}
                {/*<Nav.Link href="#News">News</Nav.Link>*/}
              {/*</Nav.Item>*/}
              <Nav.Item bsPrefix="Header__link" >
                <Nav.Link href="#band">Band</Nav.Link>
              </Nav.Item>
              {/*<Nav.Item bsPrefix="Header__link">*/}
                {/*<Nav.Link href="#video">Video</Nav.Link>*/}
              {/*</Nav.Item>*/}
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#photo">Photo</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item bsPrefix="Header__link">
                <Nav.Link href="#concets">Concerts</Nav.Link>
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
