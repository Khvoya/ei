import React, { Component } from "react";
import "./ConcertItem.css";

class ConcertItem extends Component {
  render() {
    const props = this.props;
    return (
      <a
        href={props.link}
        className="ConcertItem__link ConcertItem"
        target="blank"
      >
        <div>{props.date}</div>
        <div className="ConcertItem__country">{props.country}</div>
        <div>{props.club}</div>
      </a>
    );
  }
}

export default ConcertItem;
