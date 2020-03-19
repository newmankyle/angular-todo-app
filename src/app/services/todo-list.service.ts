import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface TodoList {
  name: string;
  id: number;
}

type TodoListDataStore = { todoLists: Record<number, TodoList> };

@Injectable({
  providedIn: "root"
})
export class TodoListService {
  private _todoLists: BehaviorSubject<TodoList> = new BehaviorSubject<TodoList>(
    { name: "", id: 0 }
  );
  private dataStore: TodoListDataStore = {
    todoLists: { 0: { name: "", id: 0 } }
  };
  private _allTodoLists: BehaviorSubject<TodoList[]> = new BehaviorSubject(
    Object.values(this.dataStore.todoLists)
  );

  private currentList: TodoList;

  constructor() {
    console.log(Object.values(this.dataStore.todoLists));
    this._todoLists.asObservable().subscribe(t => {
      this.currentList = t;
    });
  }

  getTodoList(): Observable<TodoList> {
    return this._todoLists.asObservable();
  }

  getAllLists(): Observable<TodoList[]> {
    return this._allTodoLists.asObservable();
  }

  saveName(id: number, name: string) {
    if (name === undefined || id === undefined) return;

    this.dataStore.todoLists[id] = { id, name };
    // apparently this needs to be a '==', since '===' evals to false. JS is great...
    if (id == this.currentList.id) {
      this._todoLists.next(this.dataStore.todoLists[id]);
      this._allTodoLists.next(Object.values(this.dataStore.todoLists));
    }
  }

  selectTodoList(id: number) {
    this._todoLists.next(this.dataStore.todoLists[id]);
  }

  saveNewName(name: string): number {
    let result = 0;
    const keySet: Set<string> = new Set(Object.keys(this.dataStore.todoLists));
    while (keySet.has(result.toString())) result++;

    this.dataStore.todoLists[result] = { id: result, name };
    this._allTodoLists.next(Object.values(this.dataStore.todoLists));
    return result;
  }
}
