import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact";
import AddContact from "./components/add-contact";
import EditContact from "./components/edit-contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="contact-input-container">
          <Link to="/contact"> Conact List</Link>
          <Link to="/AddContact"> Add contact </Link>
        </div>

        <Route path="/AddContact" render={() => <AddContact />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route
          path="/edit-contact/:id"
          render={props => <EditContact id={props.match.params.id} />}
        />
      </Router>
    );
  }
}

export default App;
