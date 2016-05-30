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
const Filter = (props) =>
  <li>
    <button
      href="#"
      onClick={() => props.onFilterClick(props.filterName)}
    >
      {props.children}
    </button>
  </li>;
Filter.propTypes = {
  children: PropTypes.node,
  onFilterClick: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
export default Filter;
