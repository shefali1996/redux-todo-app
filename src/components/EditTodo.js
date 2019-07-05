import React, { Component } from "react";
import { connect } from "react-redux";
import {
  edit
} from "../actions/actions";

class EditTodo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {this.props.todos.map((val, i) => (
            <div className="todo" key={i}>
              <div className="val">{val.text}</div>
              <button onClick={this.props.edit}>Edit</button>
            </div>
          ))}
          <div>
            <input type="textbox" /><button>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.TodoReducer.text,
    todos: state.TodoReducer.todos
  };
};

const mapDispachToProps = dispatch => {
  return {
    edit: () => dispatch(edit),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(EditTodo);
