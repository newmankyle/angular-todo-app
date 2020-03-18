import { Component, OnInit, Input } from "@angular/core";
import { TodoService, Todo, TodoList } from "src/app/services/todo.service";
import { Observable } from "rxjs";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "todo-list",
  template: `
    <mat-selection-list>
      <todo-item
        *ngFor="let todo of todos"
        todo="{{ todo.message }}"
        (changed)="updateTodo(todo, $event)"
      >
      </todo-item>
    </mat-selection-list>
  `,
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todoList: Observable<TodoList>;

  public todos: Todo[];

  @Input()
  id: number;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoList = this.todoService.getTodos(this.id);
    this.todoList.subscribe(t => {
      this.todos = t.todoList;
    });
  }

  updateTodo(todo: Todo, _: Event) {
    this.todoService.toggleTodo(this.id, todo);
  }
}
