require('../styles/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Counter />,
  rootElement
);
