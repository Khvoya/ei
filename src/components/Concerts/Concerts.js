import React, { Component } from "react";
import "./Concerts.css";
import {CONCERTS} from "../../constants/concerts";
import ConcertItem from "../../components/Concerts/ConcertItem/ConcertItem";

class Concerts extends Component {
    render() {
        const concerts = CONCERTS.map(item => <ConcertItem
            key={item.id}
            date={item.date}
            country={item.country}
            club={item.club}
        />);
        return (
            <div id="concerts" className="Concerts">
                <div className="Concerts__image">
                    <span>Concerts</span>
                </div>
                <div className="Concerts__content">
                    {concerts}
                </div>
            </div>
        );
    }
}

export default Concerts;
