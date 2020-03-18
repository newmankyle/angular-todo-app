import { Component, Input, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "custom-card-header",
  template: `
    <div flexLayout="row" fxLayoutAlign="space-between">
      <mat-card-title>{{ name }}</mat-card-title>
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
export class CustomCardHeaderComponent implements OnInit {
  @Input()
  id: number;

  name: string;

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getTodos(this.id).subscribe(t => (this.name = t.name));
  }

  public clearCompletedTodos() {
    this.todoService.clearCompletedTodos(this.id);
  }
}
