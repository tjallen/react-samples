import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.store.filter = e.target.value;
    console.log('handleChange', e.target.value);
  }
  render() {
    return (
      <div>
        <p>Filter todos:</p>
        <input
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
