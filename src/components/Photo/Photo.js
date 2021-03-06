import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import PhotoItem from "./PhotoItem/PhotoItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Photo.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Photo extends Component {
  static propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  state = {
    activePhoto: null
  };

  render() {
    const { urls } = this.props;
    const { activePhoto } = this.state;
    const photoItems = urls.map((img, index) => (
      <button
        key={img}
        type="button"
        onClick={() => this.setState({ activePhoto: index })}
      >
        <PhotoItem photo={img} />
      </button>
    ));
    return (
      <div className="Photo__container">
        <Container id="photo" className="Photo">
          <Row>
            <Col>
              <h1>Photos</h1>
            </Col>
          </Row>
          <Row>
            <Col className="Photo__wrap">{photoItems}</Col>

            {activePhoto !== null && (
              <Lightbox
                animationOnKeyInput={true}
                mainSrc={urls[activePhoto]}
                nextSrc={urls[(activePhoto + 1) % urls.length]}
                prevSrc={urls[(activePhoto + urls.length - 1) % urls.length]}
                onCloseRequest={() => this.setState({ activePhoto: null })}
                onMovePrevRequest={() =>
                  this.setState({
                    activePhoto: (activePhoto + urls.length - 1) % urls.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    activePhoto: (activePhoto + 1) % urls.length
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

const mapStateToProps = state => ({
  urls: state.photos.urls
});

export default connect(mapStateToProps)(Photo);
