import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {getImages} from "../../helpers/getImages";
import PhotoItem from "./PhotoItem/PhotoItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Photo.css";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.getUrls = this.getUrls.bind(this);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      urls: [],
    };
  }
  componentDidMount() {
    this.getUrls();
  }

  getUrls() {
    getImages('photos', 10).then( urls =>this.setState({ urls }));
  }
  render() {
    const { photoIndex, isOpen, urls } = this.state;
    const photoItems = urls.map((item, index)=> (
      <button
        type="button"
        onClick={() =>
          this.setState({ isOpen: true, photoIndex: index })
        }
      >
        <PhotoItem key={index} photo={item} />
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
                mainSrc={urls[photoIndex]}
                nextSrc={urls[(photoIndex + 1) % urls.length]}
                prevSrc={urls[(photoIndex + urls.length - 1) % urls.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + urls.length - 1) % urls.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % urls.length
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

