import React, { Component } from "react";

import { connect } from "react-redux";
import {
  deletContact,
  removeContact,
  getContact,
  getModifyContact
} from "../actions/action";
import { Link } from "react-router-dom";
import axios from "axios";
export class Contact extends Component {
  componentDidMount() {
    this.props.getContact();
    console.log("hello");
    axios.get("/contact").then(res => console.log(res.data));
  }
  //   getModify = () => {
  //     console.log(this.props._id);
  //     this.props.getModifyContact(this.props._id);
  //   };
  render() {
    const { contacts, deletContact } = this.props;
    return (
      <div className="contactList">
        {contacts.map((item, index) => {
          return (
            <div key={index} className="contactBox">
              <h2 style={{ justifyContent: "spaceBetween" }}>{item.name} </h2>
              <h2>{item.email}</h2>
              <h2>{item.telephone}</h2>
              <Link to={`edit-contact/${item._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deletContact(item._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.list
  };
};

export default connect(
  mapStateToProps,
  { removeContact, getContact, getModifyContact, deletContact }
)(Contact);
