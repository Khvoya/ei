import React, { Component } from "react";
import "./Welcome.css";
import instagram from "../../../src/media/icons/instagram-logo.svg";
import facebook from "../../../src/media/icons/facebook-logo-button.svg";
import vk from "../../../src/media/icons/vk-social-logotype.svg";
import youtube from "../../../src/media/icons/youtube-logotype.svg";
import twitter from "../../../src/media/icons/twitter-logo-button.svg";
import bandcamp from "../../../src/media/icons/bandcamp-logo.svg";
import { Container, Row, Col, Image } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Container>
          <Row className="Welcome__logo-container align-content-center justify-content-around ">
            <a href="https://www.instagram.com/electricindians/" target="blank">
              <img className="Welcome__logo" src={instagram} />
            </a>
            <a href="https://www.facebook.com/electricindians/" target="blank">
              {" "}
              <img className="Welcome__logo" src={facebook} />
            </a>
            <a href="https://vk.com/electricindians" target="blank">
              <img className="Welcome__logo" src={vk} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCab_uVuxFhrwyARbotaz4Tg"
              target="blank"
            >
              <img className="Welcome__logo" src={youtube} />
            </a>
            <a href="https://electricindians.bandcamp.com/" target="blank">
              <img className="Welcome__logo" src={bandcamp} />
            </a>
            <a href="https://twitter.com/electricindians" target="blank">
              <img className="Welcome__logo" src={twitter} />
            </a>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
