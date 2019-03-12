import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
          <AnchorLink offset="100" href="#welcome">
            <Nav.Link href="#welcome">
            <Navbar.Brand className="Header__logo" />
            </Nav.Link>
          </AnchorLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-around container-fluid mr-auto">
              <Nav.Item>
                <Nav.Link href="#band">
                <AnchorLink href="#band">
                  Band
                </AnchorLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink href="#photo">
                  <Nav.Link href="#photo">Photo</Nav.Link>
                </AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink href="#shop">
                  <Nav.Link href="#shop">Shop</Nav.Link>
                </AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink href="#concerts">
                  <Nav.Link href="#concerts">Gigs</Nav.Link>
                </AnchorLink>
              </Nav.Item>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.instagram.com/electricindians/"
                  target="blank"
                >
                  <img src={instagram} width="20px" height="20px" />
                  <span>Instagram</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.facebook.com/electricindians/"
                  target="blank"
                >
                  <img src={facebook} width="20px" height="20px" />
                  <span>Facebook</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://vk.com/electricindians"
                  target="blank"
                >
                  <img src={vk} width="20px" height="20px" />
                  <span>VK</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.youtube.com/channel/UCab_uVuxFhrwyARbotaz4Tg"
                  target="blank"
                >
                  <img src={youtube} width="20px" height="20px" />
                  <span>Youtube</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://electricindians.bandcamp.com/"
                  target="blank"
                >
                  <img src={bandcamp} width="20px" height="20px" />
                  <span>Bandcamp</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://twitter.com/Electricindian2"
                  target="blank"
                >
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
