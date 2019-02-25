import React, { Component } from "react";
import {PHOTOS} from "../../constants/photos";
import PhotoItem from './PhotoItem/PhotoItem';
import "./Photo.css";

class Photo extends Component {
    render() {
        const photoItems = PHOTOS.map(item => <PhotoItem key={item.photo} photo={item.photo}/>);
        return (
            <div id="photo" className="Photo">
                <h1>Photo</h1>
                <div className="Photo__wrap">
                    {photoItems}
                </div>
            </div>
        );
    }
}

export default Photo;
