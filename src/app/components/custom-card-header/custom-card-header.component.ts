import { Component } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "custom-card-header",
  templateUrl: "./custom-card-header.component.html",
  styleUrls: ["./custom-card-header.component.css"]
})
export class CustomCardHeaderComponent {
  constructor(private todoService: TodoService) {}

  public clearCompletedTodos() {
    this.todoService.clearCompletedTodos();
  }
}
