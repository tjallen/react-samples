import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>+1</button>
        <button onClick={this.decrementCount}>-1</button>
      </div>
    );
  }
}
