import React, { Component } from "react";
import "./Shop.css";
import {Container, Col, Row} from 'react-bootstrap';
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
      <Container id="shop" className="align-content-center justify-content-around">
        <Row>
          <Col>
            <h1>Shop</h1>
          </Col>
        </Row>
        <Row className="Shop__items-wrap">
            {items}
        </Row>
      </Container>
    );
  }
}

export default Shop;
