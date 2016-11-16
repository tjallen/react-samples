import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <div>
      {this.props.todos.map(todo =>
        <li key={todo.id}>{todo.text}</li>
      )}
    </div>
    );
  }
}
