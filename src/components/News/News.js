import React, { Component } from "react";
import Post from "./Post/Post.js";
import { POSTS } from "../../constants/posts";
import "./News.css";
import Button from "../helpers/Button/Button";
import {Container, Row, Card, CardDeck} from "react-bootstrap";

class News extends Component {
  render() {
    const posts = POSTS.map(item => (
      <Card
        style={{width: '400px', height: '400px', overflow: 'hidden'}}
        key={item.picture}
        picture={item.picture}
        title={item.title}
        date={item.date}
        content={item.content}
        className="News"
      >
        <Card.Img variant="top" src={item.picture}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{item.date}</small>
        </Card.Footer>
      </Card>
    ));
    return (
      <Container id="News">
        <Row className="News__title">News</Row>
        <Row className="News__posts">
          <CardDeck>
            {posts}
          </CardDeck>
        </Row>
          <Button name="show more"/>
      </Container>
    );
  }
}

export default News;
