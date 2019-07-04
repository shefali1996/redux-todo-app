import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AdddTodo from './components/AddTodo'
import Nav from "./components/Nav";
import ShowTodo from "./components/ShowTodo";
import { submit, edit, del, getValue1, getValue, checked} from './actions/actions'
import {connect} from 'react-redux'


function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
        <Route render={()=>(
            <AdddTodo
            submit={(props.submit)}
            getValue={props.getValue}
            />
            ) }
            exact path='/'/>
        <Route render={()=>(
            <ShowTodo
              todos={props.todos} 
              text={props.text}           
            />
            ) }
            path='/show-todo'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps=(state)=>{
  console.log(state.rA)
  return {
  state:state,
  text:state.rA.text,
  todos:state.rA.todos
  }
}

const mapDispachToProps=(dispatch)=>{
 return {
 submit : () => dispatch(submit()),
  edit : () => dispatch(edit),
  del: ()=>dispatch(del),
  getValue :(val)=>dispatch(getValue(val)),
  getValue1 :()=>dispatch(getValue1),
  checked:()=>dispatch(checked),
 }
  
}

export default connect(mapStateToProps,mapDispachToProps)(App);
