import React, { PropTypes } from 'react';

/*
import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}
*/

// stateless version of above
const Todo = (props) => <li>{props.text}</li>;
Todo.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Todo;
