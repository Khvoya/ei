import React, { Component } from "react";
import "./Shop.css";
import {Container, Col, Row} from 'react-bootstrap';
import leftArrow from '../../media/icons/arrow-pointing-to-left.svg'
import rightArrow from '../../media/icons/arrow-pointing-to-right.svg'
import TinySlider from "tiny-slider-react";
import { SHOP_ITEMS } from "../../constants/shop";
import ShopItem from "../../components/Shop/ShopItem/ShopItem";

class Shop extends Component {
  onGoTo = dir => this.ts.slider.goTo(dir)

  render() {
    const settings = {
      lazyload: true,
      loop: false,
      nav: false,
      rewind: true,
      prevButton: 'Shop__slider-arrow-left',
      nextButton: 'Shop__slider-arrow-right',
      controlsContainer: 'Shop__button-wrap',
      arrowKeys: true,
      mouseDrag: true,
      autoWidth: true,
      speed: 500,
      controls: false,
      responsive: {
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
        <div className="Shop__button-wrap">
          <button className="Shop__slider-arrow Shop__slider-arrow-left" type="button" onClick={() => this.onGoTo('prev')}>
            <img src={leftArrow} width="50px" height="50px"/>
          </button>
          <button className="Shop__slider-arrow Shop__slider-arrow-right" type="button" onClick={() =>  this.onGoTo('next')}>
            <img src={rightArrow} width="50px" height="50px"/>
          </button>
          <TinySlider settings={settings} ref={ts => this.ts = ts}>
            {items}
          </TinySlider>
        </div>

      </Container>
    );
  }
}

export default Shop;
