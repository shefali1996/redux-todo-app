import React, { Component } from "react";
import { connect } from "react-redux";
import { edit,save, getValue1} from "../actions/actions";

class EditTodo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {this.props.todos.map((val, i) => (
            <div className="todo" key={i}>
              <div className="val">{val.text}</div>
              {this.props.todos[i].edit && <input value={val.text} onChange={(e)=>this.props.getValue1(i,e.target.value)} placeholder="Edit"></input>}
              <button onClick={this.props.todos[i].edit?()=>this.props.save(i):()=>this.props.edit(i)}>{this.props.todos[i].edit?'SAVE':'EDIT'}</button>
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
    edit: id => dispatch(edit(id)),
    save: id => dispatch(save(id)),
    getValue1: (boxId,val1) => dispatch(getValue1(boxId,val1))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(EditTodo);
