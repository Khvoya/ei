import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Welcome.css";
import instagram from "media/icons/instagram-logo.svg";
import facebook from "media/icons/facebook-logo-button.svg";
import vk from "media/icons/vk-social-logotype.svg";
import youtube from "media/icons/youtube-logotype.svg";
import twitter from "media/icons/twitter-logo-button.svg";
import bandcamp from "media/icons/bandcamp-logo.svg";
import { Container, Row } from "react-bootstrap";
import {connect} from 'react-redux';
import {getWelcomeBg} from "actionCreators/actionCreators";

class Welcome extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.getBackground();
  }
  getBackground = () => {
    console.log(this.props);
    this.props.dispatch(getWelcomeBg('welcome', 1, true));
  };
  render() {
    const {url, isLoaded} = this.props;
    console.log(url);
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
              <a
                href="https://www.instagram.com/electricindians/"
                target="blank"
              >
                <img className="Welcome__logo" src={instagram} alt="instagram"/>
              </a>
              <a
                href="https://www.facebook.com/electricindians/"
                target="blank"
              >
                <img className="Welcome__logo" src={facebook} alt="facebook"/>
              </a>
              <a href="https://vk.com/electricindians" target="blank">
                <img className="Welcome__logo" src={vk} alt="vk"/>
              </a>
              <a
                href="https://www.youtube.com/channel/UCab_uVuxFhrwyARbotaz4Tg"
                target="blank"
              >
                <img className="Welcome__logo" src={youtube} alt="youtube"/>
              </a>
              <a href="https://electricindians.bandcamp.com/" target="blank">
                <img className="Welcome__logo" src={bandcamp} alt="bandcamp"/>
              </a>
              <a href="https://twitter.com/Electricindian2" target="blank">
                <img className="Welcome__logo" src={twitter} alt="twitter"/>
              </a>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  url: state.welcome.url,
  isLoaded: state.welcome.status === 'fulfilled',
});
export default connect(mapStateToProps)(Welcome);
