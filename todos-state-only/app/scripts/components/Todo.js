import React, { PropTypes } from 'react';

const Todo = (props) =>
  <li className="todo__item">
    <p
      className={props.completed ? 'todo--completed' : 'todo--active'}
      onClick={() => props.onClick(props.id)}
    >
    {props.text}
    </p>
    <button
      className="button--remove"
      onClick={() => props.onRemoveClick(props.id)}
    >X</button>
  </li>;
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Todo;
