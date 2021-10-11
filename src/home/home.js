import React from "react";
import { Form, Button } from "react-bootstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
    } else alert(this.state.email + " " + this.state.password);

    this.setState({ validated: true });
  }

  render() {
    return (
      <div className="home">
        <h2>Home</h2>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" required value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" required value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
