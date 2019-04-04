import React from "react";
import PropTypes from "prop-types";
import "./Welcome.css";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { socialData } from "constants/headerData";

const Welcome = props => {
  const { url, isLoaded } = props;

  const socialIcons = socialData.map(icon => (
    <a href={icon.href} target="blank" key={icon.name}>
      <img className="Welcome__logo" src={icon.img} alt={icon.name} />
    </a>
  ));

  return (
    <div>
      {isLoaded && (
        <div
          id="welcome"
          className="Welcome"
          style={{ backgroundImage: `url(${url})` }}
        />
      )}
      <div className="Welcome__logo-container">
        <Container>
          <Row className="Welcome__logo-container-wrap align-content-center justify-content-around ">
            {socialIcons}
          </Row>
        </Container>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isLoaded: state.welcome.status === "fulfilled",
  url: state.welcome.url
});

export default connect(mapStateToProps)(Welcome);
