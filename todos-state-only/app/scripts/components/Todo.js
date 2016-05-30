import React, { PropTypes } from 'react';

const Todo = (props) =>
  <li>
    <p
      style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
      onClick={() => props.onClick(props.id)}
    >
    {props.text}
    </p>
    <button
      onClick={() => props.onRemoveClick(props.id)}
    >X</button>
  </li>;
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Todo;
