import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import Filter from './Filter';
import shortid from 'shortid';

export default class TodoList extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      inputValue: '',
      currentFilter: 'ALL',
      todos: [
        // some placeholder todos
        { text: 'Write some todo tasks in the field', id: shortid.generate(), completed: false },
        { text: 'Enter to submit. Click to complete.', id: shortid.generate(), completed: false },
        { text: '???', id: shortid.generate(), completed: true },
        { text: 'Profit', id: shortid.generate(), completed: false },
      ],
    };
    // pre bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.findTodoIndex = this.findTodoIndex.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
    this.filterVisibleTodos = this.filterVisibleTodos.bind(this);
  }
  // link input field value changes w/ state
  handleChange(e) {
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
    }
  }
  // add a new todo to the state.todos array
  addTodo(text) {
    // set up the new state after adding our new todo
    const todos = [
      ...this.state.todos,
      { text, id: shortid.generate(), completed: false },
    ];
    this.setState({
      todos,
      inputValue: '',
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
    const todos = [
      ...this.state.todos.slice(0, i),
      toggledTodo,
      ...this.state.todos.slice(i + 1),
    ];
    this.setState({
      todos,
    });
  }
  // remove a todo by id - return new array w/ all ids except passed id
  removeTodo(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos,
    });
  }
  // remove all completed todos
  clearCompleted() {
    const todos = this.state.todos.filter((todo) => todo.completed !== true);
    this.setState({
      todos,
    });
  }
  // update state currentFilter property passed up from Filter filterName prop
  setVisibilityFilter(currentFilter) {
    this.setState({
      currentFilter,
    });
  }
  // decide which todos to render based on the state's currentFilter
  filterVisibleTodos(currentFilter) {
    switch (currentFilter) {
      case 'ALL':
        return this.state.todos;
      case 'ACTIVE':
        return this.state.todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return this.state.todos.filter(todo => todo.completed);
      default:
        return this.state.todos;
    }
  }
  render() {
    // rather than mapping all this.state.todos, defer to filter instead
    const todosToRender = this.filterVisibleTodos(this.state.currentFilter);
    return (
      <div>
        <h1>TodoList</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
        <ul>
          {todosToRender.map(todo =>
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
        <ul>
          <Filter
            filterName="ALL"
            onFilterClick={this.setVisibilityFilter}
          >
            Show all
          </Filter>
          <Filter
            filterName="ACTIVE"
            onFilterClick={this.setVisibilityFilter}
          >
            Active only
          </Filter>
          <Filter
            filterName="COMPLETED"
            onFilterClick={this.setVisibilityFilter}
          >
            Completed only
          </Filter>
        </ul>
      </div>
    );
  }
}
