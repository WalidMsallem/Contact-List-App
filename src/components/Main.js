import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/action";
import { removeContact } from "../actions/action";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    const { removeContact, addContact, todo } = this.props;
    return (
      <div>
        <p>List</p>
        <div>
          <input
            value={this.state.text}
            placeholder="text"
            onChange={event => this.setState({ text: event.target.value })}
          />
          <button
            onClick={() => {
              addList(this.state.text);
              this.setState({ text: "" });
            }}
          >
            add
          </button>
        </div>
        <div>
          <ol>
            {todo.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => removeContact(index)}>X</button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addList: newList => {
      dispatch(addContact(newList));
    },
    removeList: removedList => {
      dispatch(removeList(removedContact));
    }
  };
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
