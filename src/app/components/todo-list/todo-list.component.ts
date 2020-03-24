import { Component, OnInit } from "@angular/core";
import { TodoService, Todo } from "src/app/services/todo.service";
import { Observable } from "rxjs";

@Component({
  selector: "todo-list",
  template: `
    <mat-selection-list>
      <todo-item
        *ngFor="let todo of todos | async"
        todo="{{ todo.message }}"
        (changed)="updateTodo(todo, $event)"
      >
      </todo-item>
    </mat-selection-list>
  `,
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  updateTodo(todo: Todo, _: Event) {
    this.todoService.toggleTodo(todo);
  }
}
