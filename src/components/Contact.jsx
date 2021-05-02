import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later."
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <Container fluid="sm">
      <div className="Contact" style={{ paddingTop: 50 }}>
        <h1>Contact Us</h1>
        <p>
          You've had a chance to learn about us, now let's learn about you and
          your vision...
        </p>
        {result && (
          <p className={`${result.success ? "success" : "error"}`}>
            {result.message}
          </p>
        )}
        <form onSubmit={sendEmail}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              placeholder="Enter your full name"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={state.email}
              placeholder="Enter your email"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={state.subject}
              placeholder="Enter subject"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={state.message}
              rows="3"
              placeholder="Enter your message"
              onChange={onInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
        <Footer />
      </div>
    </Container>
  );
};

export default Contact;
