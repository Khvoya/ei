import React, { Component } from "react";
import "./PhotoItem.css";

class PhotoItem extends Component {
  render() {
    return <img alt="photoItem" className="PhotoItem" src={this.props.photo} />;
  }
}

export default PhotoItem;
