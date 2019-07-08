import React, { Component } from "react";
import { connect } from "react-redux";
import {del } from "../actions/actions";

class EditTodo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {this.props.todos.map((val, i) => (
            <div className="todo" key={i}>
              <div className="val">{val.text}</div>
              <button onClick={()=>this.props.del(i)}>DELETE TODO</button>
            </div>
          ))}
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
    del: delId => dispatch(del(delId))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(EditTodo);
