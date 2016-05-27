import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      inputValue: '',
      todos: [
        // some placeholder todos
        { text: 'foo', id: 0 },
        { text: 'bar', id: 1 },
        { text: 'baz', id: 2 },
      ],
    };
    // pre bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // link input field value changes w/ state
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  // handle form submission
  handleSubmit(e) {
    e.preventDefault();
    this.addTodo(this.state.inputValue);
    this.state.inputValue = '';
  }
  // add a new todo to the state.todos array
  addTodo(text) {
    let numTodos = this.state.todos.length;
    const newTodos = this.state.todos;
    newTodos.push({ text, id: numTodos++ });
    this.setState({
      todos: newTodos,
    });
  }
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
          {this.state.todos.map(todo =>
            <Todo
              text={todo.text}
              id={todo.id}
              key={todo.id}
            />
          )}
      </div>
    );
  }
}
