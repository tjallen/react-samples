import { observable, autorun, computed } from 'mobx';
import TodoModel from './TodoModel';

class TodoStore {
  @observable todos = [];
  @observable filter = '';
  constructor() {
    autorun(() => console.log(this.todos.slice()), this.filter);
  }
  @computed get filteredTodos() {
    const matches = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || matches.test(todo.text));
  }
  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }
  @computed get totalCount() {
    return this.todos.length;
  }
  @computed get activeCount() {
    return this.todos.filter(todo => todo.completed === false).length;
  }
  addTodo(text) {
    this.todos.push(new TodoModel(text));
  }
  clearCompleted = () => {
    const activeTodos = this.todos.filter(todo => !todo.completed)
    this.todos.replace(activeTodos);
  }
}
const todoStore= new TodoStore();
// window.todoStore = todoStore;
export default todoStore;
