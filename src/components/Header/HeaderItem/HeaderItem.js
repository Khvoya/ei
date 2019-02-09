import React, { Component } from "react";
import "./HeaderItem.css";

class HeaderItem extends Component {
    render() {
        return (
            <div className="HeaderItem">
                {this.props.name}
            </div>
        );
    }
}

export default HeaderItem;