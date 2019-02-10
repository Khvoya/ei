import React, { Component } from "react";
import "./PhotoItem.css";

class PhotoItem extends Component {
    render() {
        return (
            <div className="PhotoItem">
                <img alt="photoItem" src={this.props.photo}></img>
            </div>
        );
    }
}

export default PhotoItem;