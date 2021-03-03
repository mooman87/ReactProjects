import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { SocialIcon } from "react-social-icons";

ReactDOM.render(
  <div className="social">
    <div className="container">
      <App />
    </div>
    <SocialIcon url="https://www.facebook.com/PGH-Museums-621974164883426/" />
    <SocialIcon url="https://www.instagram.com/pghmuseums/" />
    <SocialIcon url="https://twitter.com/PGHMuseums" />
    <SocialIcon url="https://www.youtube.com/channel/UCiOX64QZ-kBelxRyrI_6FOg" />
  </div>,
  document.getElementById("root")
);

//what to show, where to show it
//must have div to render more than one element
//renders App component
//can render multiple html tags in render method
