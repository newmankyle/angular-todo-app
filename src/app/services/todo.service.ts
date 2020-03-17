import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { resetFakeAsyncZone } from "@angular/core/testing";

export interface Todo {
  message: string;
  completed: boolean;
}

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos = new BehaviorSubject<Todo[]>([]);
  private dataStore: { todos: Todo[] } = { todos: [] };
  constructor() {}

  get todos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  saveTodo(todo: Todo) {
    this.dataStore.todos.push(todo);
    const { todos: newTodos } = this.dataStore;
    this._todos.next(newTodos);
  }

  toggleTodo(todo: Todo) {
    for (const item of this.dataStore.todos) {
      if (item.message === todo.message) {
        item.completed = !item.completed;
      }
    }
    this._todos.next(this.dataStore.todos);
  }

  clearCompletedTodos() {
    this.dataStore.todos = this.dataStore.todos.filter(t => !t.completed);
    this._todos.next(this.dataStore.todos);
  }
}
