import React, { Component } from "react";
import "./Welcome.css";
import { Container, Row, Col } from 'react-bootstrap';
import Button from "../../components/helpers/Button/Button";

class Welcome extends Component {
  render() {
    return (
        <Container className="Welcome">
          <Row className="justify-content-md-center" md="auto">
            <Col >
              <h2>welcome to the</h2>
              <h1 className="Welcome__text-el">Electric Indians</h1>
              <div className="Welcome__button-wrap">
                <Button name="veiw album"/>
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

;

export default Welcome;
