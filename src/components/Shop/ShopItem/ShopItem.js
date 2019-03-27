import React, { Component } from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';
import  ShopModal  from '../ShopModal/ShopModal'
import "./ShopItem.css";

class ShopItem extends Component {
  state = { modalShow: false };

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const {name, price, imageUrl, material} = this.props;
    return (
      <ButtonToolbar>
        <Button onClick={() => this.setState({ modalShow: true })}>
          <div className="ShopItem__wrap">
            <div className="ShopItem">
              <div className="ShopItem__image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="ShopItem__text-wrap">
                <div className="ShopItem__name">{name}</div>
                <div className="ShopItem__price">{price}</div>
                <div className="ShopItem__price">{material}</div>
              </div>
            </div>
          </div>
        </Button>
        <ShopModal
          show={this.state.modalShow}
          onHide={modalClose}
          itemname={name}
          price={price}
          image={imageUrl}
          material={material}
        />
      </ButtonToolbar>
    );
  }
}

export default ShopItem;
