import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor() {
    super();
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
  }
  onTodoSubmit(e) {
    e.preventDefault();
    this.props.store.addTodo(this.todoInput.value);
    this.todoInput.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onTodoSubmit}>
          <p>Add a todo:</p>
          <input
            ref={(input) => this.todoInput = input}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
