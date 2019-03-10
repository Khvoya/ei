import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import instagram from "../../../src/media/icons/instagram-logo.svg";
import facebook from "../../../src/media/icons/facebook-logo-button.svg";
import vk from "../../../src/media/icons/vk-social-logotype.svg";
import youtube from "../../../src/media/icons/youtube-logotype.svg";
import twitter from "../../../src/media/icons/twitter-logo-button.svg";
import bandcamp from "../../../src/media/icons/bandcamp-logo.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect="true" fixed="top" expand="md" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="Header__logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-around container-fluid mr-auto">
              <Nav.Item>
                <Nav.Link href="#band">Band</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#photo">Photo</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#concerts">Concerts</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.instagram.com/electricindians/" target="blank">
                  <img src={instagram} width="20px" height="20px" />
                  <span>Instagram</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/electricindians/" target="blank">
                  <img src={facebook} width="20px" height="20px" />
                  <span>Facebook</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://vk.com/electricindians" target="blank">
                  <img src={vk} width="20px" height="20px" />
                  <span>VK</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/channel/UCab_uVuxFhrwyARbotaz4Tg" target="blank">
                  <img src={youtube} width="20px" height="20px" />
                  <span>Youtube</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://electricindians.bandcamp.com/" target="blank">
                  <img src={bandcamp} width="20px" height="20px" />
                  <span>Bandcamp</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://twitter.com/Electricindian2" target="blank">
                  <img src={twitter} width="20px" height="20px" />
                  <span>Twitter</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
