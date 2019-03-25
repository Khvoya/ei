import React, { Component } from "react";
import {Container, Col, Row} from 'react-bootstrap';
import instagram from "../../../src/media/icons/instagram-logo.svg";
import facebook from "../../../src/media/icons/facebook-logo-button.svg";
import vk from "../../../src/media/icons/vk-social-logotype.svg";
import youtube from "../../../src/media/icons/youtube-logotype.svg";
import twitter from "../../../src/media/icons/twitter-logo-button.svg";
import bandcamp from "../../../src/media/icons/bandcamp-logo.svg";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer__bg">
        <Container className="Footer">
          <Row className="Footer__wrap">
            <Col className="Footer__coop" lg={4} xl={4} md={4} >
              <a href="mailto:electricindiansband@gmail.com">electricindiansband@gmail.com</a>
            </Col>
            <Col className="Footer__social"lg={4} xl={4} md={4} >
              <div className="Footer__social-wrap">
                <a href="https://www.instagram.com/electricindians/" target="blank">
                  <img className="Footer__social-icon" src={instagram} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/electricindians/" target="blank">
                  <img className="Footer__social-icon" src={facebook} alt="facebook"/>
                </a>
                <a href="https://vk.com/electricindians" target="blank">
                  <img className="Footer__social-icon" src={vk} alt="vk"/>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCab_uVuxFhrwyARbotaz4Tg"
                  target="blank"
                >
                  <img className="Footer__social-icon" src={youtube} alt="youtube"/>
                </a>
                <a href="https://electricindians.bandcamp.com/" target="blank">
                  <img className="Footer__social-icon" src={bandcamp} alt="bandcamp"/>
                </a>
                <a href="https://twitter.com/Electricindian2" target="blank">
                  <img className="Footer__social-icon" src={twitter} alt="twitter"/>
                </a>
              </div>
            </Col>
            <Col className="Footer__year" lg={4} xl={4} md={4} sm={12} >
              <span className="Footer__dev-info-r">Electric Indians 2019 ©</span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
