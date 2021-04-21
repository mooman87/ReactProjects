import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function Impression() {
  return (
    <Container fluid="sm">
      <div>
        <h1>Make an impression...</h1>
        <Carousel>
          <Carousel.Item interval={3500}>
            <img className="slideshow" src="./cabin.jpg" alt="cabin" />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="slideshow"
              src="./hockinghills.jpg"
              alt="hockinghills"
            />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="slideshow" src="./nmb.jpg" alt="nmb" />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Impression;
