import React, { Component } from "react";
import { Button, ButtonToolbar, Carousel } from "react-bootstrap";
import ShopModal from "../ShopModal/ShopModal";
import "./ShopItem.css";
import PropTypes from "prop-types";

class ShopItem extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
    material: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
  };

  state = { modalShow: false };

  modalClose = () => this.setState({ modalShow: false });

  render() {
    const { name, price, imageUrl, material, description, size } = this.props;
    return (
      <ButtonToolbar>
        <Button
          className="ShopItem__wrap"
          onClick={() => this.setState({ modalShow: true })}
        >
          <div className="ShopItem">
            <Carousel
              controls={false}
              indicators={false}
              fade={true}
              pauseOnHover={false}
              interval={2000}
            >
              <div className="ShopItem__images">
                {imageUrl.map(image => (
                  <img
                    className="ShopItem__image"
                    src={image}
                    alt={name}
                    key={image}
                  />
                ))}
              </div>
            </Carousel>

            <div className="ShopItem__text-wrap">
              <h2 className="ShopItem__name">{name}</h2>
              <div className="ShopItem__price">{price}</div>
              <div className="ShopItem__price">{material}</div>
            </div>
          </div>
        </Button>
        <ShopModal
          show={this.state.modalShow}
          hide={this.modalClose}
          name={name}
          price={price}
          image={imageUrl}
          material={material}
          description={description}
          size={size}
        />
      </ButtonToolbar>
    );
  }
}

export default ShopItem;
