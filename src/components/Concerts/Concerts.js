import React, { Component } from "react";
import "./Concerts.css";
import { Container, Col, Row } from "react-bootstrap";
import { CONCERTS } from "../../constants/concerts";
import ConcertItem from "../../components/Concerts/ConcertItem/ConcertItem";

export const Concerts = () => (
  <div className="Concerts__container">
    <Container id="concerts" className="Concerts">
      <Row className="Concerts__image">
        <Col className="Concerts__title">
          <h1>Gigs</h1>
        </Col>
      </Row>
      <Row>
        <Col className="Concerts__text">
          <p>
            If you want to see us at your location, please contact us <br />
            <a href="mailto:electricindiansband@gmail.com">
              electricindiansband@gmail.com
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="Concerts__content">
          {CONCERTS.length > 0 &&
            CONCERTS.map(item => (
              <ConcertItem
                key={item.id}
                date={item.date}
                country={item.country}
                club={item.club}
              />
            ))}
        </Col>
      </Row>
    </Container>
  </div>
);

export default Concerts;
