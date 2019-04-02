import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import ShopModal from "../ShopModal/ShopModal";
import "./ShopItem.css";

class ShopItem extends Component {
  state = { modalShow: false };

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const { name, price, imageUrl, material, description, size } = this.props;
    return (
      <ButtonToolbar>
        <Button
          className="ShopItem__wrap"
          onClick={() => this.setState({ modalShow: true })}
        >
          <div className="ShopItem">
            <div className="ShopItem__image">
              <img className="" src={imageUrl[0]} alt={name} />
            </div>
            <div className="ShopItem__text-wrap">
              <div className="ShopItem__name">{name}</div>
              <div className="ShopItem__price">{price}</div>
              <div className="ShopItem__price">{material}</div>
            </div>
          </div>
        </Button>
        <ShopModal
          show={this.state.modalShow}
          onHide={modalClose}
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
