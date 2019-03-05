import React, { Component } from "react";
import {Carousel, Row, Col} from 'react-bootstrap';
import "./AboutUs.css";

class AboutUs extends Component {
    render() {
        return (
            <Row id="band" className="AboutUs">
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=First slide&bg=373940"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
                <Col className="AboutUs__text">
                    <h1>Band</h1>
                    <p>
                        "On the other hand, we denounce with righteous indignation and dislike
                        men who are so beguiled and demoralized by the charms of pleasure of
                        the moment, so blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs to those who
                        fail in their duty through weakness of will, which is the same as saying
                        through shrinking from toil and pain. These cases are perfectly simple
                        and easy to distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every pain avoided.
                    </p>
                </Col>
            </Row>
        );
    }
}

export default AboutUs;
