import React, { Component } from "react";
import Post from "./Post/Post.js";
import { POSTS } from "../../constants/posts";
import "./News.css";
import Button from "../helpers/Button/Button";

class News extends Component {
  render() {
    const posts = POSTS.map(item => (
      <Post
        key={item.picture}
        picture={item.picture}
        title={item.title}
        date={item.date}
        content={item.content}
      />
    ));
    return (
      <div id="News">
        <h1 className="News__title">News</h1>
        <div className="News__posts">{posts}</div>
          <Button name="show more"/>
      </div>
    );
  }
}

export default News;
