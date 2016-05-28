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
        { text: 'foo', id: 0, completed: false },
        { text: 'bar', id: 1, completed: true },
        { text: 'baz', id: 2, completed: false },
      ],
    };
    // pre bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
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
    let todosCount = this.state.todos.length;
    const newTodos = [
      ...this.state.todos,
      { text, id: todosCount++, completed: false },
    ];
    this.setState({
      todos: newTodos,
    });
  }
  toggleTodo(id) {
    const toggledTodo = Object.assign({}, this.state.todos[id]);
    toggledTodo.completed = !toggledTodo.completed;
    const newTodos = [
      ...this.state.todos.slice(0, id),
      toggledTodo,
      ...this.state.todos.slice(id + 1),
    ];
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
              onClick={this.toggleTodo}
              completed={todo.completed}
            />
          )}
      </div>
    );
  }
}
