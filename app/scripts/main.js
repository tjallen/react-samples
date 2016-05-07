require('../styles/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter';

ReactDOM.render(
  <div>
    <h1>Hello world</h1>
    <Counter />
  </div>,
  document.getElementById('app')
);
