import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Impression from "./components/Impression";
import Memory from "./components/Memory";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ paddingTop: 40, display: "flex", flexDirection: "column" }}>
      <Impression />
      <Memory />
      <Footer />
    </div>
  );
}

export default App;
