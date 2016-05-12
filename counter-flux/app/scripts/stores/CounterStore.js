import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/AppDispatcher';

class CounterStore extends EventEmitter {
  constructor() {
    super();
    this.count = 0;
  }
  // basic methods
  emitChange() {
    this.emit('CHANGE_EVENT');
  }
  getCount() {
    return this.count;
  }
  // handle actions sent from the dispatcher
  handleActions(action) {
    switch (action.type) {
      case 'INCREMENT_COUNT': {
        this.count = this.count + 1;
        this.emitChange();
        break;
      }
      case 'DECREMENT_COUNT': {
        this.count = this.count - 1;
        this.emitChange();
        break;
      }
      default: {
        // do nothing
      }
    }
    return true;
  }
}

const counterStore = new CounterStore;
dispatcher.register(counterStore.handleActions.bind(counterStore));

export default counterStore;
