import React, { Component } from "react";
import HeaderItem from "./HeaderItem/HeaderItem";
import {HEADER_ITEMS} from "../../constants/header";
import "./Header.css";

class Header extends Component {
    render() {
        const items = HEADER_ITEMS.map(item => {
           return <HeaderItem name={item}/>
        });
        return (
            <div className="Header">
                <div className="Header__logo">
                </div>
                <div className="Header__item-wrap">
                    {items}
                </div>
                <div className="Language">
                </div>
            </div>
        );
    }
}

export default Header;