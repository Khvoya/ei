import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { ABOUT_US_PHOTOS } from "../../constants/aboutUs";
import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    const photos = ABOUT_US_PHOTOS.map(item => (
      <Carousel.Item key={item.id}>
        <img
          className="d-block w-100"
          src={item.photo}
          alt="First slide"
        />
      </Carousel.Item>
    ));
    return (
      <div id="band" className="AboutUs">
        <Col className="AboutUs__slider-wrap" xl="6" lg="12" md="12" sm="12" xs="12">
          <Carousel controls={false} fade={true} pauseOnHover={false} interval="4000">{photos}</Carousel>
        </Col>
        <Col xl="6" lg="12" md="12" sm="12" xs="12" className="AboutUs__text">
          <h1>Band</h1>
          <p>
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided.
          </p>
        </Col>
      </div>
    );
  }
}

export default AboutUs;
