import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getModifyContact, modifyContact } from "../actions/action";
import { withRouter } from "react-router-dom";

class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      telephone: "",
      email: ""
    };
  }
  routeChange = () => {
    let path = `/contact`;
    this.props.history.push(path);
  };

  holderChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentWillMount() {
    this.props.getModifyContact(this.props.id);

    this.setState({
      name: this.props.name,
      telephone: this.props.telephone,
      email: this.props.email
    });
  }
  componentDidMount() {
    const { name, email, telephone } = this.props.modify;
    this.setState({
      name: name,
      telephone: telephone,
      email: email
    });
    console.log(this.state, "state");
    console.log(this.props, "props kkkkkkkkkkkk");
  }
  onSubmit = () => {
    const { _id } = this.props.modify;
    const { name, telephone, email } = this.state;

    this.props.modifyContact(_id, { name, telephone, email });
    this.routeChange();
  };
  render() {
    const { name, telephone, email } = this.state;
    return (
      <div
        className="contact-input-container "
        style={{ flexDirection: "column" }}
      >
        <h1> Edit contact </h1>
        <div className="contact-input">
          <input
            placeholder="name"
            name="name"
            onChange={this.holderChange}
            value={name}
          />
          <input
            placeholder="email"
            name="email"
            onChange={this.holderChange}
            value={email}
          />
          <input
            placeholder="telephone"
            name="telephone"
            onChange={this.holderChange}
            value={telephone}
          />
          <button onClick={this.onSubmit}>Edit</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    modify: state.modify
  };
};

const fun = withRouter(EditContact);
export default connect(
  mapStateToProps,
  { getModifyContact, modifyContact }
)(fun);
