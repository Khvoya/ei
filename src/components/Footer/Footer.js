import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import {socialData} from "constants/headerData";
import "./Footer.css";

const Footer = () => {
    const socialIcons = socialData.map(icon => (
      <a href={icon.href} target="blank" key={icon.name}>
        <img className="Footer__social-icon" src={icon.img} alt={icon.name}/>
      </a>
    ));
    return (
      <div className="Footer__bg">
        <Container className="Footer">
          <Row className="Footer__wrap">
            <Col className="Footer__coop" lg={4} xl={4} md={4} >
              <a href="mailto:electricindiansband@gmail.com">electricindiansband@gmail.com</a>
            </Col>
            <Col className="Footer__social" lg={4} xl={4} md={4} >
              <div className="Footer__social-wrap">
                {socialIcons}
              </div>
            </Col>
            <Col className="Footer__year" lg={4} xl={4} md={4} sm={12} >
              <span className="Footer__dev-info-r">Electric Indians 2019 ©</span>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;
