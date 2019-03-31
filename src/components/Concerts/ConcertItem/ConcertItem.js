import React, { Component } from "react";
import "./ConcertItem.css";

class ConcertItem extends Component {
    render() {
        const props = this.props;
        return (
            <div className="ConcertItem">
                <div >{props.date}</div>
                <div className="ConcertItem__country" >{props.country}</div>
                <div >{props.club}</div>
              <a href={props.link} className="ConcertItem__link" target="blank">Event link</a>
            </div>
        );
    }
}

export default ConcertItem;
