import React, { Component } from "react";
import { Carousel, Col } from "react-bootstrap";
import "./AboutUs.css";
import {connect} from 'react-redux';

class AboutUs extends Component {
  render() {
    const { urls } = this.props;
    const photos = urls.map((item, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" alt="slide" src={item} />
      </Carousel.Item>
    ));
    return (
      <div id="band" className="AboutUs">
        <Col
          className="AboutUs__slider-wrap"
          xl="6"
          lg="12"
          md="12"
          sm="12"
          xs="12"
        >
          <Carousel
            controls={false}
            fade={true}
            pauseOnHover={false}
            interval={10000}
          >
            {photos}
          </Carousel>
        </Col>
        <Col xl="6" lg="12" md="12" sm="12" xs="12" className="AboutUs__text">
          <h1>Band</h1>
          <p>
            In ordinary life we are three engineers and teacher but when we get
            together- we are "Electric Indians". Despite the fact that this
            project was formed in 2016, each of us has the experience of playing
            in groups of different directions from electronic music to metal,
            which we unite in our music using an ambient transitions, african
            and jungle-beats, vocal performances with processor and looper etc.
            It's not capable of "sticking to the shore" of a particular style:
            the mood, the shade of genres and even language can vary from song
            to song withiout losing the spirit of rock and metal schools, of
            course. Also, using the work with lighting devices, any of our shows
            turns into a kind of "ritual", which will not leave indifferent any
            participant of the event..
          </p>
        </Col>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  urls: state.aboutUs.urls,
});
export default connect(mapStateToProps)(AboutUs);
