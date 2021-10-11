import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  function handleSubmit(event) {
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
    } else alert(email + " " + password);

    setValidated(true);
  }

  return (
    <div className="home">
      <h2>Home</h2>
      <Form name="login" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
