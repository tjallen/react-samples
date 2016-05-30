import React, { PropTypes } from 'react';

const Filter = (props) =>
  <li className="filter__item">
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
