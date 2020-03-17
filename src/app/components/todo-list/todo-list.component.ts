import { Component, OnInit } from "@angular/core";
import { TodoService, Todo } from "src/app/services/todo.service";
import { Observable } from "rxjs";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  updateTodo(todo: Todo, _: Event) {
    this.todoService.toggleTodo(todo);
  }
}
