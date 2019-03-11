import React, { Component } from "react";
import { PHOTOS } from "../../constants/photos";
import { Container, Col, Row } from "react-bootstrap";
import PhotoItem from "./PhotoItem/PhotoItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Photo.css";

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    const photoItems = PHOTOS.map(item => (
      <button
        type="button"
        onClick={() =>
          this.setState({ isOpen: true, photoIndex: PHOTOS.indexOf(item) })
        }
      >
        <PhotoItem key={item} photo={item} />
      </button>
    ));
    return (
      <div className="Photo__container">
        <Container id="photo" className="Photo">
          <Row>
            <Col>
              <h1>Photo</h1>
            </Col>
          </Row>
          <Row>
            <Col className="Photo__wrap">{photoItems}</Col>

            {isOpen && (
              <Lightbox
                animationOnKeyInput={true}
                mainSrc={PHOTOS[photoIndex]}
                nextSrc={PHOTOS[(photoIndex + 1) % PHOTOS.length]}
                prevSrc={PHOTOS[(photoIndex + PHOTOS.length - 1) % PHOTOS.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + PHOTOS.length - 1) % PHOTOS.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % PHOTOS.length
                  })
                }
              />
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Photo;

