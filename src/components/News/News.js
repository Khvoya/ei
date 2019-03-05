import React, { Component } from "react";
import { POSTS } from "../../constants/posts";
import "./News.css";
import Button from "../helpers/Button/Button";
import { Container, Row, Card, CardDeck, Col } from "react-bootstrap";

class News extends Component {
  render() {
    const posts = POSTS.map(item => (
      <Card
        key={item.picture}
        className="News__item"
      >
        <Card.Img variant="top" src={item.picture} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
      </Card>
    ));
    return (
      <Container id="News" className="News">
        <Col className="News__title">News</Col>
        <CardDeck className="News__wrap">{posts}</CardDeck>
        <Col className="News__show-more-btn">
          <Button name="show more" />
        </Col>
      </Container>
    );
  }
}

export default News;
