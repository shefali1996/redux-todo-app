import React from "react";
function ShowTodo(props) {
  return (
    <div className="container">
      {props.todos.map((val, i) => (
        <div className="todo" key={i}>
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => props.inputCompleted(i)}
            checked={props.todos[i].completed}
          />
          <div className="val">{val.text}</div>
          <div>{val.completed && "Completed"}</div>
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
