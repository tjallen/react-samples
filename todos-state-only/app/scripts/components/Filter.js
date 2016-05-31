import React, { PropTypes } from 'react';

const Filter = (props) => {
  if (props.filterName === props.currentFilter) {
    return (
      <li className="filter__item filter__item--active">
        <button>
          {props.children}
        </button>
      </li>
    );
  }
  return (
    <li className="filter__item">
      <button
        href="#"
        onClick={() => props.onFilterClick(props.filterName)}
      >
        {props.children}
      </button>
    </li>
  );
};

Filter.propTypes = {
  children: PropTypes.node,
  onFilterClick: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
export default Filter;
