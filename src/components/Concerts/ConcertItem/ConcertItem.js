import React, { Component } from "react";
import "./ConcertItem.css";

class ConcertItem extends Component {
    render() {
        const props = this.props;
        return (
            <div className="ConcertItem">
                <div className="ConcertItem__date">{props.date}</div>
                <div className="ConcertItem__country">{props.country}</div>
                <div className="ConcertItem__club">{props.club}</div>
            </div>
        );
    }
}

export default ConcertItem;
