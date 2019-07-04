import React from 'react'
function ShowTodo(props){
console.log(props.todos);
      return (
        <div className="container">
          {props.todos.map((val, i) => (
            <div className="todo" key={i}>
              <input
                className="checkbox"
                type="checkbox"
              />
              <div className="val">{props.text}</div>
            </div>
          ))}
        </div>
      );
  }

  export default ShowTodo;
  