import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "todo-item",
  template: `
    <mat-list-option (click)="handleChanged($event)">{{
      todo
    }}</mat-list-option>
  `,
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent {
  constructor() {}

  @Input()
  public todo: string;

  @Output()
  public changed = new EventEmitter();

  public handleChanged(event) {
    this.changed.emit(event);
  }
}
