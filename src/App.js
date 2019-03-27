import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUs";
import Photo from "./components/Photo/Photo";
import Shop from "./components/Shop/Shop";
import Concerts from "./components/Concerts/Concerts";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import {
  getAboutUs,
  getConcertsData,
  getImageRef,
  getWelcomeBg,
  getShopData,
} from "actionCreators/actionCreators";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    getWelcomeBg: PropTypes.func
  };

  componentDidMount() {
    this.props.getWelcomeBg("welcome", 1, true);
    this.props.getAboutUs("aboutUs", 3);
    this.props.getImageRef("photos", 9);
    this.props.getConcertsData();
    this.props.getShopData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <AboutUs />
        <Photo />
        <Shop />
        <Concerts />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = {
  getWelcomeBg,
  getAboutUs,
  getImageRef,
  getConcertsData,
  getShopData
};

export default connect(
  null,
  mapDispatchToProps
)(App);
