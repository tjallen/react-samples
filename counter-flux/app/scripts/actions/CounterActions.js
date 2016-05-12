import dispatcher from '../dispatcher/AppDispatcher';

export function onIncrement() {
  dispatcher.dispatch({
    type: 'INCREMENT_COUNT',
  });
}

export function onDecrement() {
  dispatcher.dispatch({
    type: 'DECREMENT_COUNT',
  });
}
