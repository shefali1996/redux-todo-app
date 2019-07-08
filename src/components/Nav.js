import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Add Todo</li>
        </Link>
        <Link to="/show-todo">
          <li>Show Todo</li>
        </Link>
        <Link to="/edit-todo">
          <li>Edit Todo</li>
        </Link>
        <Link to="/delete-todo">
          <li>Delete Todo</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
