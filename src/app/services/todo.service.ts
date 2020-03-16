import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos = new BehaviorSubject<string[]>(["this", "that"]);
  private dataStore: { todos: string[] } = { todos: [] };
  constructor() {}

  get todos(): Observable<string[]> {
    return this._todos.asObservable();
  }
}
