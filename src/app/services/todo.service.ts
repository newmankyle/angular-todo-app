import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos = new BehaviorSubject<string[]>([]);
  private dataStore: { todos: string[] } = { todos: [] };
  constructor() {}

  get todos(): Observable<string[]> {
    return this._todos.asObservable();
  }

  saveTodo(todo: string) {
    this.dataStore.todos.push(todo);
    const { todos: newTodos } = this.dataStore;
    this._todos.next(newTodos);
  }
}
