import React, { Component } from "react";
import "./ShopItem.css";

class ShopItem extends Component {
  render() {
    const props = this.props;
    console.log(props);
    return (
      <div className="ShopItem__wrap">
        <div className="ShopItem">
          <div className="ShopItem__image">
            <img src={props.src} alt={props.name} />
          </div>
          <div className="ShopItem__text-wrap">
            <div className="ShopItem__name">{props.name}</div>
            <div className="ShopItem__price">{props.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
