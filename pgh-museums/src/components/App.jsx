import React from "react";
import { NewsNav, MediaNav, DirectoryNav, EventsNav, Features } from "./Home";
import Media from "./Media";
import reviews from "../reviews";
import Post from "./Post";

function createPost(review) {
  return (
    <Post
      key={review.id}
      img={review.postimg}
      date={review.date}
      title={review.title}
      post={review.post}
    />
  );
}
//
function App() {
  return (
    <div>
      <DirectoryNav />
      <EventsNav />
      <MediaNav />

      <Features />
      {reviews.map(createPost)}
    </div>
  );
}

export default App;
//renders all components

//syntax for multiple exports:
//export {secondary, tertiary, etc}
//declared variables may also be exported
//not just functions
//import syntax for multiples
//import primary {secondary, tertiary, etc}
