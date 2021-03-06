import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { headerData, socialData } from "constants/headerData";
import "./Header.css";

const Header = () => {
  const headerItems = headerData.map(link => (
    <Nav.Item key={link.name}>
      <AnchorLink className="Header__link" href={link.href}>
        <Nav.Link as="span" href={link.href}>
          {link.name}
        </Nav.Link>
      </AnchorLink>
    </Nav.Item>
  ));

  const headerDropdown = socialData.map(item => (
    <NavDropdown.Item href={item.href} target="blank" key={item.name}>
      <img src={item.img} width="20px" height="20px" alt={item.name} />
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
          <Nav.Link className="Header__logo-link" as="span" href="#welcome">
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
};


export default Header;
