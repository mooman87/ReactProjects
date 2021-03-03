import React from "react";
import Media from "./Media";
import reviews from "../reviews";
function NewsNav() {
  return (
    <button className="navbtn">
      <img src="./newsbutton.svg" alt="news" className="navbtn" />
    </button>
  );
}

function MediaNav() {
  return (
    <button className="navbtn">
      <img src="./mediabutton.svg" alt="media" className="navbtn" />
    </button>
  );
}

function DirectoryNav() {
  return (
    <button className="navbtn">
      <img src="./directorybtn.svg" alt="dir" className="navbtn" />
    </button>
  );
}

function EventsNav() {
  return (
    <button className="navbtn">
      <img src="./eventsbtn.svg" alt="events" className="navbtn" />
    </button>
  );
}

function Features() {
  return (
    <div>
      <h1>Latest News</h1>
    </div>
  );
}

export { NewsNav, MediaNav, DirectoryNav, EventsNav, Features };
