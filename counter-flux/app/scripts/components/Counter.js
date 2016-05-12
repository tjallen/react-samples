import React from 'react';

import * as CounterActions from '../actions/CounterActions';
import CounterStore from '../stores/CounterStore';

export default class Counter extends React.Component {
  constructor() {
    super();
    // prebind methods
    this.onIncrement = CounterActions.onIncrement.bind(this);
    this.onDecrement = CounterActions.onDecrement.bind(this);
    // set initial state
    this.state = {
      count: CounterStore.getCount(),
    };
    // event listeners - when store emits change, update local state
    CounterStore.on('CHANGE_EVENT', () => {
      this.setState({
        count: CounterStore.getCount(),
      });
    });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
      </div>
    );
  }
}
