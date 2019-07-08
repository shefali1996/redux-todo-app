import React from "react";

class AddTodo extends React.Component {
  enterPressed = e => {
    if (e.key === "Enter") {
      this.props.submit();
    }
  };
  render() {
    return (
      <div className="container">
        <h2>Todo</h2>
        <input
          placeholder="Your Todo..."
          type="text"
          className={this.props.state.error + " textbox"}
          name="text"
          value={this.props.text}
          onChange={e => this.props.getValue(e.target.value)}
          onKeyPress={e => this.enterPressed(e)}
        />
        <button onClick={this.props.submit}>Submit</button>
      </div>
    );
  }
}

export default AddTodo;
