import { observable, autorun, computed } from 'mobx';

class TodoStore {
  @observable todos = [
    { id: 0, text: 'foo', completed: false },
    { id: 1, text: 'bar', completed: true },
    { id: 2, text: 'baz', completed: false },
  ];
  @observable filter = '';
  constructor() {
    autorun(() => console.log(this.todos.slice()), this.filter);
  }
  @computed get filteredTodos() {
    const matches = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || matches.test(todo.text));
  }
  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }
  getTodos() {
    return this.todos;
  }
  getTodoCount() {
    return this.todos.length;
  }
  addTodo(text) {
    let count = this.getTodoCount();
    const id = count++;
    console.log('adding Todo', text);
    this.todos.push({
      id: id,
      text,
      completed: false,
    });
  }
}
const todoStore= new TodoStore();
window.todoStore = todoStore;
export default todoStore;
