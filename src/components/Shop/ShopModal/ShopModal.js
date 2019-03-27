import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class ShopModal extends Component {
  async emailSender() {
  }
  render() {
    const props = this.props;
    return (
      <Modal
        {...props}
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
          <p>
            You have chosen <strong>{props.itemname}</strong> , please fill the form
            and we'll contact you as soon as possible.
          </p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={this.emailSender}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ShopModal;
