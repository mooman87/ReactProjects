import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid="sm">
      <footer style={{ paddingTop: "20", color: "darkOrange" }}>
        <p>Made with Passion at Gingersnap Studios ⓒ {year}</p>
      </footer>
    </Container>
  );
}

export default Footer;
