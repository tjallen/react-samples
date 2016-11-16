import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  onTodoSubmit(e) {
    e.preventDefault();
    this.props.store.addTodo(this.state.text);
    console.log('todoSubmit', this.state.text);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onTodoSubmit}>
          <p>Add a todo:</p>
          <input
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
