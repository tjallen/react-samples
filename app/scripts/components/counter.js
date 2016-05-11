import React from 'react';

export default class Counter extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
  }
  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <p>Click count: {count}</p>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
      </div>
    );
  }
}
