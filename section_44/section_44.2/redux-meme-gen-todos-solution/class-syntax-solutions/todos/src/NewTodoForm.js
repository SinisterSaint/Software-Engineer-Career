import React, { Component } from "react";
import uuid from "uuid/v1";

export default class NewTodoForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.gatherInput = this.gatherInput.bind(this);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  gatherInput(evt){
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), isEditing: false });
    this.setState({
      task: ""
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.gatherInput}>
          <label htmlFor="task">Task:</label>
          <input
            name="task"
            type="text"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add a todo!</button>
        </form>
      </div>
    );
  }
}
