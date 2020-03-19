import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface TodoList {
  name: string;
  id: number;
}

@Injectable({
  providedIn: "root"
})
export class TodoListService {
  private _todoLists: BehaviorSubject<TodoList> = new BehaviorSubject<TodoList>(
    { name: "", id: 0 }
  );
  private dataStore: { todoLists: Record<number, TodoList> } = {
    todoLists: {}
  };
  private currentList: TodoList;
  constructor() {
    this._todoLists.asObservable().subscribe(t => {
      this.currentList = t;
    });
  }

  getTodoList() {
    return this._todoLists.asObservable();
  }

  saveName(id: number, name: string) {
    if (name === undefined || id === undefined) return;

    this.dataStore.todoLists[id] = { id, name };
    // apparently this needs to be a '==', since '===' evals to false. JS is great...
    if (id == this.currentList.id) {
      this._todoLists.next(this.dataStore.todoLists[id]);
    }
  }
}
