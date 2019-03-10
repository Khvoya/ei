import React, { Component } from "react";
import "./Shop.css";
import {Container, Col, Row} from 'react-bootstrap';
import TinySlider from "tiny-slider-react";
import { SHOP_ITEMS } from "../../constants/shop";
import ShopItem from "../../components/Shop/ShopItem/ShopItem";

class Shop extends Component {
  onGoTo = dir => this.ts.slider.goTo(dir)

  render() {
    const settings = {
      lazyload: true,
      nav: false,
      mouseDrag: true,
      autoWidth: true,
      controls: false,
      responsive: {
        1600: {
          items: 4,
        },
        1200: {
          items: 3,
        },
        900: {
          items: 2,
        }
      },
    };
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
            <h1 className="Shop__title">Shop</h1>
          </Col>
        </Row>

          <TinySlider settings={settings} ref={ts => this.ts = ts}>
            {items}
          </TinySlider>
        <button type="button" onClick={() => this.onGoTo('prev')}/>
        <button type="button" onClick={() =>  this.onGoTo('next')}/>
      </Container>
    );
  }
}

export default Shop;
