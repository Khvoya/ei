import React, { Component } from "react";
import "./Concerts.css";
import { Container, Col, Row } from "react-bootstrap";
import {getConcertsData} from "actionCreators/actionCreators";
import ConcertItem from "components/Concerts/ConcertItem/ConcertItem";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Concerts extends Component {
  static propTypes = {
    concerts: PropTypes.arrayOf(
      PropTypes.exact({
        club: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ),
  };

  constructor(props) {
    super(props);
    this.getConcerts();
  }
  getConcerts = () => {
    this.props.dispatch(getConcertsData());
  };

  render() {
    const {concerts} = this.props;
    return(
      <div className="Concerts__container">
        <Container id="concerts" className="Concerts">
          <Row className="Concerts__image">
            <Col className="Concerts__title">
              <h1>Gigs</h1>
            </Col>
          </Row>
          <Row>
            <Col className="Concerts__text">
              <p>
                If you want to see us at your location, please contact us <br />
                <a href="mailto:electricindiansband@gmail.com">
                  electricindiansband@gmail.com
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="Concerts__content">
              {concerts.length > 0 &&
              concerts.map((item, i) => (
                <ConcertItem
                  key={i}
                  date={item.date}
                  country={item.country}
                  club={item.club}
                  link={item.link}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  concerts: state.concerts.concerts,
});

export default connect(mapStateToProps)(Concerts);
