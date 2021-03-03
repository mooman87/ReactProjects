import React from "react";
import reviews from "../reviews";

function Post(props) {
  return (
    <div>
      <img className="post-img" src={props.img} alt="img" />
      <h6 className="post-info">{props.date}</h6>
      <h4 className="post-info">{props.title}</h4>
      <p>{props.post}</p>
    </div>
  );
}

export default Post;
