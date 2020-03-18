import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface Todo {
  message: string;
  completed: boolean;
}

export type TodoList = { name: string; todoList: Todo[] };

export type TodoListById = Record<number, TodoList>;

export type TodoListType = { todos: TodoListById };

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos: Record<number, BehaviorSubject<TodoList>> = {};
  private dataStore: TodoListType = { todos: {} };
  constructor() {}

  getTodos(id: number): Observable<TodoList> {
    if (this._todos[id] === undefined) {
      this._todos[id] = new BehaviorSubject<TodoList>(this.emptyTodo);
    }
    return this._todos[id].asObservable();
  }

  saveName(id: number, name: string) {
    if (name === undefined || id === undefined) return;
    if (this._todos[id] === undefined) {
      this._todos[id] = new BehaviorSubject<TodoList>(this.emptyTodo);
    }
    this.ensureTodoList(id);
    this.dataStore.todos[id].name = name;
    this._todos[id].next(this.dataStore.todos[id]);
  }

  saveTodo(id: number, todo: Todo) {
    this.listById(id).push(todo);
    const { todos: newTodos } = this.dataStore;
    this._todos[id].next(newTodos[id]);
  }

  toggleTodo(id: number, todo: Todo) {
    for (const item of this.listById(id)) {
      if (item.message === todo.message) {
        item.completed = !item.completed;
      }
    }
    this._todos[id].next(this.dataStore.todos[id]);
  }

  clearCompletedTodos(id: number) {
    this.dataStore.todos[id].todoList = this.listById(id).filter(
      t => !t.completed
    );
    this._todos[id].next(this.dataStore.todos[id]);
  }

  private listById(id: number) {
    this.ensureTodoList(id);
    return this.dataStore.todos[id].todoList;
  }

  private ensureTodoList(id: number) {
    const todos = this.dataStore.todos[id];
    if (todos === undefined) {
      this.dataStore.todos[id] = this.emptyTodo;
    }
  }

  private get emptyTodo() {
    return { name: "", todoList: [] };
  }
}
