import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../actions/action";
import { withRouter } from "react-router-dom";

class AddContact extends Component {
  holderChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  routeChange = () => {
    let path = `/contact`;
    this.props.history.push(path);
  };
  onSubmit = () => {
    const obj = this.state;
    this.props.addContact(obj);
    this.routeChange();
  };

  render() {
    return (
      <div
        className="contact-input-container "
        style={{ flexDirection: "column" }}
      >
        <h1> add contact</h1>
        <div className="contact-input">
          <input placeholder="name" name="name" onChange={this.holderChange} />
          <input
            placeholder="email"
            name="email"
            onChange={this.holderChange}
          />
          <input
            placeholder="telephone"
            name="telephone"
            onChange={this.holderChange}
          />
          <button onClick={this.onSubmit}>add</button>
        </div>
      </div>
    );
  }
}
const func = withRouter(AddContact);
export default connect(
  null,
  { addContact }
)(func);
