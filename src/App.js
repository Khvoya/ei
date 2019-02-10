import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import News from "./components/News/News";
import AboutUs from "./components/AboutUs/AboutUs";
// import Music from "./components/Music/Music";
import Albums from "./components/Albums/Albums";
import Video from "./components/Video/Video";
import Photo from "./components/Photo/Photo";
import Shop from "./components/Shop/Shop";
import Concerts from "./components/Concerts/Concerts";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Welcome/>
        <News/>
        <AboutUs/>
        {/*<Music/>*/}
        <Albums/>
        <Video/>
        <Photo/>
        <Shop/>
        <Concerts/>
        <Footer/>
      </div>
    );
  }
}

export default App;
