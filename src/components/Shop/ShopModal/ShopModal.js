import React, { Component } from "react";
import { Button, Modal, Form, Container, Col, Row } from "react-bootstrap";

class ShopModal extends Component {
  emailSender = () => {};
  render() {
    const {
      name,
      price,
      description,
      image,
      material,
      size,
      onHide
    } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        autoFocus={false}
        centered
        scrollable="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Great choice!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col className="d-flex flex-column">
                <img src={image} alt={name} />
                <span><strong>{name}</strong></span>
                <span><strong>Material:</strong> {material}</span>
                <span><strong>Size:</strong> {size}</span>
                <span><strong>Price:</strong> {price}</span>
                <p>{description}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  For getting this stuff , please fill the form
                  and we'll contact you as soon as possible.
                </p>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="formComment">
                    <Form.Label>Write some comment here</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <Button
                    variant="dark"
                    type="submit"
                    onClick={this.emailSender}
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ShopModal;
