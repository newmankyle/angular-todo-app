import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TodoListService } from "./todo-list.service";

export interface Todo {
  message: string;
  completed: boolean;
}

export type TodoListById = Record<number, Todo[]>;

export type TodoListType = { todos: TodoListById };

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private dataStore: TodoListType = { todos: {} };
  private id: number;
  constructor(private todoListService: TodoListService) {
    this.todoListService.getTodoList().subscribe(l => {
      this.id = l.id;
      this.ensureTodoList();
      this._todos.next(this.listById());
    });
  }

  getTodos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  saveTodo(todo: Todo) {
    this.listById().push(todo);
    this._todos.next(this.listById());
  }

  toggleTodo(todo: Todo) {
    for (const item of this.listById()) {
      if (item.message === todo.message) {
        item.completed = !item.completed;
      }
    }
    this._todos.next(this.listById());
  }

  clearCompletedTodos() {
    this.dataStore.todos[this.id] = this.listById().filter(t => !t.completed);
    this._todos.next(this.listById());
  }

  private listById(): Todo[] {
    return this.dataStore.todos[this.id];
  }

  private ensureTodoList() {
    const todos = this.dataStore.todos[this.id];
    if (todos === undefined) {
      this.dataStore.todos[this.id] = [];
    }
  }
}
