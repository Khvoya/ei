import React, { Component } from "react";
import { Button, Modal, Form, Container, Col, Row, Carousel } from "react-bootstrap";
import { sendOrderMail } from "actionCreators/actionCreators";
import './ShopModal.css';
import {connect} from 'react-redux';

class ShopModal extends Component {
  emailSender = () => {
    const {
      name,
      price,
      size,
      onHide,
    } = this.props;
    const {userName, emailAddress, comment} = this.state;
    const email = `Request to purchase: 
    Item name: ${name},
    Item size: ${size},
    Item price: ${price},
    
    Contact data:
    
    Client name: ${userName},
    Email address: ${emailAddress},
    Additional comment: ${comment}
    `;
    onHide();
    this.props.dispatch(sendOrderMail(email));

  };

  setClientName = (e) => {
    this.setState({userName: e.target.value});
  };

  setClientEmail = (e) => {
    this.setState({emailAddress: e.target.value});
  };

  setClientComment = (e) => {
    this.setState({comment: e.target.value});
  };

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
        size="lg"
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
              <Col className="ShopModal__item-info d-flex justify-content-around">
                <Carousel
                  controls={false}
                  fade={true}
                  pauseOnHover={false}
                  interval={3000}
                >
                  {image.map(image => <img className="ShopModal__item-img" src={image} alt={name} />)}
                </Carousel>
                <div className="d-flex flex-column justify-content-around">
                  <span><strong>{name}</strong></span>
                  <span><strong>Material:</strong> {material}</span>
                  <span><strong>Size:</strong> {size}</span>
                  <span><strong>Price:</strong> {price}</span>
                  <p>{description}</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-3" >
              <Col>
                <p>
                  For getting this stuff , please fill the form
                  and we'll contact you as soon as possible.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.setClientName} type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.setClientEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Form.Group controlId="formComment">
                    <Form.Label>Write some comment here</Form.Label>
                    <Form.Control onChange={this.setClientComment} as="textarea" rows="3" />
                  </Form.Group>
                  <Button
                    variant="dark"
                    type="button"
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
const mapStateToProps = (state) => ({
  email: state.sendEmail.email,
});
export default connect(mapStateToProps)(ShopModal);
