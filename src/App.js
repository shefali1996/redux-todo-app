import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import ShowTodo from "./components/ShowTodo";
import {
  submit,
  edit,
  del,
  getValue1,
  getValue,
  checked
} from "./actions/actions";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            render={() => (
              <AdddTodo
                submit={props.submit}
                getValue={props.getValue}
                text={props.text}
              />
            )}
            exact
            path="/"
          />
          <Route
            render={() => <ShowTodo todos={props.todos} state={props.state} />}
            path="/show-todo"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text: state.TodoReducer.text,
    todos: state.TodoReducer.todos
  };
};

const mapDispachToProps = dispatch => {
  return {
    submit: () => dispatch(submit()),
    edit: () => dispatch(edit),
    del: () => dispatch(del),
    getValue: val => dispatch(getValue(val)),
    getValue1: () => dispatch(getValue1),
    checked: () => dispatch(checked)
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
