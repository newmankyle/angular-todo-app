import { Component, Input, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {
  RenameTodoList,
  RenameTodoListData
} from "../rename-todo-list/rename-todo-list";

@Component({
  selector: "custom-card-header",
  template: `
    <div flexLayout="row" fxLayoutAlign="space-between">
      <mat-card-title fxFlexAlign="center">{{
        name || "placeholder"
      }}</mat-card-title>
      <button mat-icon-button (click)="openDialog()">
        <mat-icon>edit</mat-icon>
      </button>
      <div fxFlex="grow"></div>
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
  styles: [".mat-card-title { text-overflow: ellipsis; white-space: nowrap;}"]
})
export class CustomCardHeaderComponent implements OnInit {
  @Input()
  id: number;

  name: string;

  constructor(private dialog: MatDialog, private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getTodos(this.id).subscribe(t => (this.name = t.name));
  }

  public openDialog() {
    const dialogRef: MatDialogRef<
      RenameTodoList,
      RenameTodoListData
    > = this.dialog.open(RenameTodoList, {
      width: "250px",
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(({ name }) => {
      this.todoService.saveName(this.id, name);
    });
  }

  public clearCompletedTodos() {
    this.todoService.clearCompletedTodos(this.id);
  }
}
