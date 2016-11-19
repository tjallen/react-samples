import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
  toggleCompleted(todo) {
    todo.completed = !todo.completed;;
  }
  render() {
    const { 
      // todos,
      filteredTodos,
      completedCount,
      // activeCount,
      totalCount,
    } = this.props.store;
    return (
      <div>
        <ul>
          {filteredTodos.map(todo =>
            <li key={todo.id}>
              {/* [{todo.id}] */}
              {todo.text}
              <input
                type="checkbox"
                onChange={() => this.toggleCompleted(todo)} value={todo.completed}
                checked={todo.completed}
              />
            </li>
          )}
        </ul>
        {totalCount > 0 &&
          <p>{completedCount} / {totalCount} completed</p>
        }
        {completedCount > 0 &&
          <button onClick={this.props.store.clearCompleted}>Clear completed</button>
        }
      </div>
    );
  }
}
