import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
