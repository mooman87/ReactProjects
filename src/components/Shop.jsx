import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function Shop() {
  return (
    <Container fluid="sm">
      <div style={{ paddingTop: 40 }}>
        <div>
          <h1>Coming Soon!</h1>
          {/* <p>
            Our high quality canvas prints are the perfect accent piece for your
            home or office. Choose from a variety of options, including size,
            matte or glossy, and printing material.
          </p>
          <Row>
            <Figure style={{ paddingLeft: 10, paddingRight: 20 }}>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="wf.jpg"
                thumbnail
              />
              <Figure.Caption>Waterfall - $100</Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="ocean.jpg"
                thumbnail
              />
              <Figure.Caption>Ocean - $100</Figure.Caption>
            </Figure>
          </Row>
          <Row>
            <Figure style={{ paddingLeft: 10, paddingRight: 20 }}>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="ppg.jpg"
                thumbnail
              />
              <Figure.Caption>PPG - $100</Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="cabin.jpg"
                thumbnail
              />
              <Figure.Caption>Cabin - $100</Figure.Caption>
            </Figure>
          </Row> */}
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default Shop;
//need to know which pieces are on offer and what sizes are available
