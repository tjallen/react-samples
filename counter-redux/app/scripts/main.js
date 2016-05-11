// styles
require('../styles/style.css');
// react basics
import React from 'react';
import ReactDOM from 'react-dom';
// redux createStore and reducers
import { createStore } from 'redux';
import counter from './reducers';
// import components
import Counter from './components/counter';
// define root element and use createStore function
const rootElement = document.getElementById('app');
const store = createStore(counter);

function render() {
  ReactDOM.render(
    <Counter
      count={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootElement
  );
}

render();
// add a change listener
store.subscribe(render);
