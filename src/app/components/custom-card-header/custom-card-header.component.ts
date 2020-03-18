import { Component } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "custom-card-header",
  template: `
    <div flexLayout="row" fxLayoutAlign="space-between">
      <mat-card-title>Todo App</mat-card-title>
      <button
        mat-icon-button
        color="accent"
        matTooltip="Clear all completed Todos"
        matTooltipPosition="left"
        (click)="clearCompletedTodos()"
      >
        <mat-icon>clear_all</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ["./custom-card-header.component.css"]
})
export class CustomCardHeaderComponent {
  constructor(private todoService: TodoService) {}

  public clearCompletedTodos() {
    this.todoService.clearCompletedTodos();
  }
}
