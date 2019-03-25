import React, { Component } from "react";
import "./App.css";
import {store} from './store/store-index';
import {Provider} from 'react-redux';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUs";
import Photo from "./components/Photo/Photo";
import Shop from "./components/Shop/Shop";
import Concerts from "./components/Concerts/Concerts";
import Footer from "./components/Footer/Footer";



function Root(){
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

class App extends Component {
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

export default Root;
