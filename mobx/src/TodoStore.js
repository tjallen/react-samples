class TodoStore {
  todos = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: true },
    { id: 3, text: 'baz', completed: false },
  ];
  getTodos() {
    return this.todos;
  }
  addTodo(todo) {
    console.log('adding new todo', todo);
    this.todos.push(todo);
  }
}
const todoStore= new TodoStore();
window.todoStore = todoStore;
export default todoStore;
