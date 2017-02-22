import { bindable, bindingMode } from 'aurelia-framework';

import { Todo } from 'todos/todo/todo';

export class TodoList {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) todos;
  @bindable allowDestruction = false;

  constructor(description, done) {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription, false));
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
