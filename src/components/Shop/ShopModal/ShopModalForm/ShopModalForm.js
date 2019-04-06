import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import { sendOrderMail } from "actionCreators/actionCreators";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ShopModalForm extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
    price: PropTypes.string.isRequired
  };

  state = { validated: false };

  handleSubmit = (event) => {
    const { name, price, onHide } = this.props;
    const { email, comment } = this.state;
    const isValid = event.currentTarget.checkValidity();
    event.preventDefault();
    event.stopPropagation();
    this.setState({ validated: true });
    if (!isValid) return;

    this.props.dispatch(sendOrderMail({
      name,
      price,
      email,
      comment,
    }));
    onHide();
  };

  setClientEmail = e => {
    this.setState({ email: e.target.value });
  };

  setClientComment = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            onChange={this.setClientEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group controlId="formComment">
          <Form.Label>Write some comment here</Form.Label>
          <Form.Control
            onChange={this.setClientComment}
            as="textarea"
            rows="3"
            placeholder="Any additional info (e.g. share your social profile or clarify something)"
          />
        </Form.Group>
        <Button variant="dark" type="submit" >
          Order item
        </Button>
      </Form>
    );
  }
}
export default connect()(ShopModalForm);
