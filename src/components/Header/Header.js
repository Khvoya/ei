import React from "react";
import { Navbar, Nav, NavDropdown, Container, Alert } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { headerData, socialData } from "constants/headerData";
import { connect } from "react-redux";
import "./Header.css";

const Header = props => {
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
      {/*<div className="position-relative">*/}
          {/*<Alert className={props.sendMailStatus === "fulfilled" ? "Header__mailer-alert-true" : "Header__mailer-alert-false"} variant="success">*/}
            {/*Success request*/}
          {/*</Alert>*/}
      {/*</div>*/}
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

const mapStateToProps = state => ({
  sendMailStatus: state.sendEmail.status
});

export default connect(mapStateToProps)(Header);
