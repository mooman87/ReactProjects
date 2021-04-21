import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import axios from "axios";

export default class MessageList extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <Container fluid="sm">
        <div style={{ paddingTop: 40 }}>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              class="form-control"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
            <label>Email</label>
            <input class="form-control" type="text" name="email" />

            <label>Message</label>
            <textarea
              class="form-control"
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            <button
              type="submit"
              name="publish"
              autocomplete="off"
              class="btn btn-success"
            >
              Submit
            </button>
          </form>
          <Footer />
        </div>
      </Container>
    );
  }
}

// function Contact() {
//   return (
//     <Container fluid="lg">
//       <div>
//         <div>
//           <h1>Contact Us</h1>
//           <p>
//             You've learned about us, so tell us about you and your vision...
//           </p>
//           <form class="blog" action="/contact" method="post">
//             <div class="form-group">
//               <label>Name</label>
//               <input class="form-control" type="text" name="msgSubject" />
//               <label>Email</label>
//               <input class="form-control" type="text" name="msgSubject" />

//               <label>Message</label>
//               <textarea
//                 class="form-control"
//                 name="msgBody"
//                 cols="30"
//                 rows="5"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               name="publish"
//               autocomplete="off"
//               class="btn btn-success"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//         <Footer />
//       </div>
//     </Container>
//   );
// }

// export default Contact;
