import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import ShowTodo from "./components/ShowTodo";
import EditTodo from "./components/EditTodo";
import DeleteTodo from "./components/DeleteTodo";
import { submit, getValue1, getValue, completed } from "./actions/actions";
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
                state={props.state}
              />
            )}
            exact
            path="/"
          />
          <Route
            render={() => (
              <ShowTodo
                todos={props.todos}
                inputCompleted={props.inputCompleted}
              />
            )}
            path="/show-todo"
          />
          <Route render={() => <EditTodo />} path="/edit-todo" />
          <Route render={() => <DeleteTodo />} path="/delete-todo" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.TodoReducer,
    text: state.TodoReducer.text,
    todos: state.TodoReducer.todos
  };
};

const mapDispachToProps = dispatch => {
  return {
    submit: () => dispatch(submit()),
    getValue: val => dispatch(getValue(val)),
    getValue1: () => dispatch(getValue1),
    inputCompleted: i => dispatch(completed(i))
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
