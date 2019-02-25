import React, { Component } from "react";
import "./Welcome.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/helpers/Button/Button";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Container className="justify-content-center Welcome__text">
          <Row className="Welcome__text-pre-title">welcome to the</Row>
          <Row className="Welcome__text-title">Electric Indians</Row>
          <Row className="Welcome__text-button">
            <Button name="veiw album" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
