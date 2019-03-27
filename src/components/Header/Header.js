import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { headerData, dropDownData } from 'constants/headerData'
import "./Header.css";

class Header extends Component {
  render() {

    const headerItems = headerData.map(link => (
      <Nav.Item>
        <AnchorLink className="Header__link" href={link.href}>
          <Nav.Link as="span" href={link.href}>
            {link.name}
          </Nav.Link>
        </AnchorLink>
      </Nav.Item>
    ));

    const headerDropdown = dropDownData.map(item => (
      <NavDropdown.Item
        href={item.href}
        target="blank"
      >
        <img
          src={item.img}
          width="20px"
          height="20px"
          alt={item.name}
        />
        <span>{item.name}</span>
      </NavDropdown.Item>
    ));

    return (
      <Navbar collapseOnSelect="true" fixed="top" expand="md" variant="dark">
        <Container>
          <AnchorLink
            offset="100"
            href="#welcome"
            className="Header__logo-container"
          >
            <Nav.Link as="span" href="#welcome">
              <Navbar.Brand className="Header__logo" />
            </Nav.Link>
          </AnchorLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-around align-items-center container-fluid">
              {headerItems}
              <NavDropdown
                className="Header__link-dropdown"
                title="Links"
                id="basic-nav-dropdown"
              >
                {headerDropdown}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
