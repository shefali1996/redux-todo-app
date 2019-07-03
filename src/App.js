import React from "react";
import "./App.css";
import Nav from './components/Nav'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
