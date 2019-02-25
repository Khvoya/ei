import React, { Component } from "react";
import "./Shop.css";
import { SHOP_ITEMS } from "../../constants/shop";
import ShopItem from "../../components/Shop/ShopItem/ShopItem";

class Shop extends Component {
  render() {
    const items = SHOP_ITEMS.map(item => (
      <ShopItem
        src={item.image}
        name={item.name}
        price={item.price}
        key={item.name}
      />
    ));
    return (
      <div id="shop" className="Shop">
        <h1>Shop</h1>
        <div className="Shop__wrap">
          {items}
        </div>
      </div>
    );
  }
}

export default Shop;
