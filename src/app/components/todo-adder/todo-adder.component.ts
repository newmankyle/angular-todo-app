import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "todo-adder",
  template: `
    <mat-form-field class="todo-input" appearance="outline">
      <input
        matInput
        placeholder="Add to your list..."
        type="text"
        [(ngModel)]="name"
        (keyup.enter)="saveTodo()"
      />
    </mat-form-field>
  `,
  styleUrls: ["./todo-adder.component.css"]
})
export class TodoAdderComponent implements OnInit {
  public name = "";

  @Input()
  id: number;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public saveTodo() {
    if (this.name === undefined || this.name === "") {
      return;
    }
    this.todoService.saveTodo(this.id, {
      message: this.name,
      completed: false
    });
    this.name = "";
  }
}
