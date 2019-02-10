import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Item.css";

class Item extends Component {
  render() {
    const opts = {
      height: "200",
      width: "375",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div className="Item">
        <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}

export default Item;
