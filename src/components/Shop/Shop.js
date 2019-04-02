import React, { Component } from "react";
import "./Shop.css";
import { Container, Col, Row } from "react-bootstrap";
import leftArrow from "../../media/icons/arrow-pointing-to-left.svg";
import TinySlider from "tiny-slider-react";
import ShopItem from "../../components/Shop/ShopItem/ShopItem";
import connect from "react-redux/es/connect/connect";

class Shop extends Component {
  onGoTo = dir => () => this.ts.slider.goTo(dir);

  render() {
    const settings = {
      autoplay: true,
      autoplayButtonOutput: false,
      lazyload: true,
      loop: false,
      nav: false,
      rewind: true,
      gutter: 20,
      arrowKeys: true,
      mouseDrag: true,
      autoHeight: true,
      speed: 500,
      controls: false,
      responsive: {
        1600: {
          items: 4
        },
        1200: {
          items: 3
        },
        800: {
          autoWidth: true,
          items: 2
        },
        0: {
          items: 1,
        }
      }
    };
    const {shop} = this.props;
    const items = shop.map((item, index) => (
      <ShopItem
        name={item.name}
        price={item.price}
        material={item.material}
        imageUrl={item.imageUrl}
        description={item.description}
        key={index}
        size={item.size}
      />
    ));
    return (
      <Container
        id="shop"
        className="align-content-center justify-content-around"
      >
        <Row>
          <Col>
            <h1 className="Shop__title">Shop</h1>
          </Col>
        </Row>
        <div className="Shop__button-wrap">
          <button
            className="Shop__slider-arrow Shop__slider-arrow-left"
            type="button"
            onClick={this.onGoTo("prev")}
          >
            <img src={leftArrow} width="50px" height="50px" alt="left-arrow" />
          </button>
          <button
            className="Shop__slider-arrow Shop__slider-arrow-right"
            type="button"
            onClick={this.onGoTo("next")}
          >
            <img
              src={leftArrow}
              width="50px"
              height="50px"
              alt="right-arrow"
            />
          </button>
          {items.length > 0 && (
            <TinySlider settings={settings} ref={ts => (this.ts = ts)}>
              {items}
            </TinySlider>
          )}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  shop: state.shop.shop,
});
export default connect(mapStateToProps)(Shop);
