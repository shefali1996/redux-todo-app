import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Todo</h2>
        <input
          placeholder="Your Todo..."
          type="text"
          className={"textbox"}
          name="text"
          value={this.props.text}
          onChange={e => this.props.getValue(e.target.value)}
        />
        <button onClick={this.props.submit}>Submit</button>
      </div>
    );
  }
}

export default AddTodo;
