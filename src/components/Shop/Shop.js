import React, { Component } from "react";
import "./Shop.css";
import { Container, Col, Row } from "react-bootstrap";
import leftArrow from "../../media/icons/arrow-pointing-to-left.svg";
import TinySlider from "tiny-slider-react";
import ShopItem from "../../components/Shop/ShopItem/ShopItem";
import { settings } from "constants/tinySliderSettings";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";

class Shop extends Component {
  static propTypes = {
    shop: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        imageUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
        material: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired
      }).isRequired
    )
  };

  onGoTo = dir => () => this.ts.slider.goTo(dir);

  render() {
    const { shop } = this.props;
    const items = shop.map(item => (
      <ShopItem
        id={item.id}
        name={item.name}
        price={item.price}
        material={item.material}
        imageUrl={item.imageUrl}
        description={item.description}
        key={item.id}
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
            <img src={leftArrow} width="50px" height="50px" alt="right-arrow" />
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

const mapStateToProps = state => ({
  shop: state.shop.shop
});
export default connect(mapStateToProps)(Shop);
