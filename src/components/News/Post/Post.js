import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    const props = this.props;
    return (
      <div className="Post">
        <div>
          <div/>
            <img className="Post__picture" alt="pic" src={props.picture}/>
          <div className="Post__text-wrap">
            <div className="Post__date">{String(props.date)}</div>
            <div className="Post__title">{props.title}</div>
            <div className="Post__content">{props.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
