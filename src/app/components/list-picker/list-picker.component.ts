import { Component, OnInit, PipeTransform, Pipe } from "@angular/core";
import { TodoListService, TodoList } from "src/app/services/todo-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "list-picker",
  template: `
    <mat-action-list>
      <button
        mat-list-item
        *ngFor="let list of todoLists | async"
        (click)="selectTodoList(list.id)"
        matTooltip="{{ list.name }}"
        [matTooltipShowDelay]="500"
        [matTooltipDisabled]="list.name | determineLength"
      >
        {{ list.name || "unnamed" }}
      </button>
    </mat-action-list>
  `,
  styleUrls: ["./list-picker.component.css"]
})
export class ListPickerComponent implements OnInit {
  public todoLists: Observable<TodoList[]>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoLists = this.todoListService.getAllLists();
  }

  public selectTodoList(id: number) {
    this.todoListService.selectTodoList(id);
  }
}
