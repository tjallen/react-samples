import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import shortid from 'shortid';

export default class TodoList extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      inputValue: '',
      todos: [
        // some placeholder todos
        { text: 'foo', id: shortid.generate(), completed: false },
        { text: 'bar', id: shortid.generate(), completed: true },
        { text: 'baz', id: shortid.generate(), completed: false },
      ],
    };
    // pre bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.findTodoIndex = this.findTodoIndex.bind(this);
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
    // make sure there's some input field content
    if (this.state.inputValue.length > 0) {
      this.addTodo(this.state.inputValue);
      this.state.inputValue = '';
    }
  }
  // add a new todo to the state.todos array
  addTodo(text) {
    // set up the new state after adding our new todo
    const newTodos = [
      ...this.state.todos,
      { text, id: shortid.generate(), completed: false },
    ];
    this.setState({
      todos: newTodos,
    });
  }
  // helper function to get the index of the todo in state array by id
  findTodoIndex(id) {
    return this.state.todos.findIndex((todo) => todo.id === id);
  }
  // toggle completed true/false on passed todo
  toggleTodo(id) {
    const i = this.findTodoIndex(id);
    // assign new obj from todo at this index with !completed
    const toggledTodo = Object.assign(
      {}, this.state.todos[i], {
        completed: !this.state.todos[i].completed,
      }
    );
    // create new todos array with replaced object !completed
    const newTodos = [
      ...this.state.todos.slice(0, i),
      toggledTodo,
      ...this.state.todos.slice(i + 1),
    ];
    this.setState({
      todos: newTodos,
    });
  }
  // remove a todo by id - return new array w/ all ids except passed id
  removeTodo(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  }
  // remove all completed todos
  clearCompleted() {
    const newTodos = this.state.todos.filter((todo) => todo.completed !== true);
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
        <ul>
          {this.state.todos.map(todo =>
            <Todo
              text={todo.text}
              id={todo.id}
              key={todo.id}
              onClick={this.toggleTodo}
              completed={todo.completed}
              onRemoveClick={this.removeTodo}
            />
          )}
        </ul>
        <br />
        <button
          onClick={this.clearCompleted}
        >
        Clear completed
        </button>
      </div>
    );
  }
}
