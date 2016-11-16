import React, { Component } from 'react';
import logo from './logo.svg';
import TodoStore from './TodoStore';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>todoMobX</h2>
        </div>
        <TodoList todos={TodoStore.getTodos()} />
        <TodoInput store={TodoStore} />
      </div>
    );
  }
}

export default App;
