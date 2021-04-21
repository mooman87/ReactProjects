import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container fluid="sm">
      <div style={{ paddingTop: 40 }}>
        <h1>A little about us...</h1>
        <p>
          Our professional photographers are experienced in making the most of
          your special day. Senior portraits, wedding portraits, natural
          photography...our experience is endless!{" "}
        </p>
        <div>
          <h1>Event Photography</h1>
          <Row>
            <Col xs={6} md={4}>
              <Image src="wedding.jpg" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src="kiss.jpg" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src="kiss2.jpg" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src="bridalparty.jpg" thumbnail />
            </Col>
          </Row>
          <h1 style={{ paddingTop: 20 }}>Gallery Prints</h1>
          <Row>
            <Col xs={6} md={4}>
              <Image src="ppg.jpg" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src="cabin.jpg" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src="mush.jpg" thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src="ocean.jpg" thumbnail />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default About;
