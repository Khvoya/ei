import React, { Component } from "react";
import { Button, Modal, Container, Col, Row, Carousel } from "react-bootstrap";
import "./ShopModal.css";
import PropTypes from "prop-types";
import ShopModalForm from "./ShopModalForm/ShopModalForm";

export class ShopModal extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    material: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
    price: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired
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
        centered
        restoreFocus={false}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Great choice!</h1>
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
                  {image.map(image => (
                    <img
                      className="ShopModal__item-img"
                      src={image}
                      alt={name}
                      key={image}
                    />
                  ))}
                </Carousel>
                <div className="ShopModal__item-info-text d-flex flex-column justify-content-around">
                  <h2>
                    <strong>{name}</strong>
                  </h2>
                  <span>
                    <strong>Material:</strong> {material}
                  </span>
                  <span>
                    <strong>Size:</strong> {size}
                  </span>
                  <span>
                    <strong>Price:</strong> {price}
                  </span>
                  <p>{description}</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <p>
                  For getting this stuff , please fill the form and we'll
                  contact you as soon as possible.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <ShopModalForm name={name} price={price} onHide={onHide} />
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
