import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
  render() {
    const { todos, filteredTodos } = this.props.store;
    return (
      <div>
      {filteredTodos.map(todo =>
        <li key={todo.id}>[{todo.id}] {todo.text} [completed: {todo.completed.toString()}]</li>
      )}
    </div>
    );
  }
}
