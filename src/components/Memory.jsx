import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function Memory() {
  return (
    <Container fluid="sm">
      <div>
        <h1>Make a memory...</h1>
        <Carousel>
          <Carousel.Item interval={3500}>
            <img className="slideshow" src="./c5redo.jpg" alt="c5" />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="slideshow" src="./wedding.jpg" alt="wedding" />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="slideshow"
              src="./bridalparty.jpg"
              alt="bridalparty"
            />
          </Carousel.Item>
        </Carousel>
        <h1>
          Make it with{" "}
          <img
            src="/PPLogo3.svg"
            width="310"
            height="350"
            className="d-inline-block align-top bottom-logo"
            alt="pikephoto"
          />
        </h1>
      </div>
    </Container>
  );
}

export default Memory;
