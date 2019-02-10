import React, { Component } from "react";
import "./Video.css";
import {VIDEO} from "../../constants/video";
import Item from "../Video/Item/Item";

class Video extends Component {
    render() {
        const videos = VIDEO.map(item => <Item key={item.id} id={item.id}/>);
        return (
            <div className="Video">
                <h1>Video</h1>
                <div className="Video__item-wrap">
                    {videos}
                </div>
            </div>
        );
    }
}

export default Video;