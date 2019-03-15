import React, { Component } from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';
import  ShopModal  from '../ShopModal/ShopModal'
import "./ShopItem.css";

class ShopItem extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const {src, name, price} = this.props;
    return (
      <ButtonToolbar>
        <Button onClick={() => this.setState({ modalShow: true })}>
          <div className="ShopItem__wrap">
            <div className="ShopItem">
              <div className="ShopItem__image">
                <img src={src} alt={name} />
              </div>
              <div className="ShopItem__text-wrap">
                <div className="ShopItem__name">{name}</div>
                <div className="ShopItem__price">{price}</div>
              </div>
            </div>
          </div>
        </Button>
        <ShopModal
          show={this.state.modalShow}
          onHide={modalClose}
          itemname={name}
        />
      </ButtonToolbar>
    );
  }
}

export default ShopItem;
