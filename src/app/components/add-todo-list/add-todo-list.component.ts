import { Component, OnInit } from "@angular/core";
import { TodoListService } from "src/app/services/todo-list.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {
  RenameTodoList,
  RenameTodoListData
} from "../rename-todo-list/rename-todo-list";

@Component({
  selector: "add-todo-list",
  template: `
    <button mat-raised-button class="button-list-add" (click)="openDialog()">
      <span flexLayout="row" fxLayoutGap="8px" fxLayoutAlign="space-between">
        <mat-icon color="primary">add</mat-icon>
        <span class="mat-body-2">Add List</span>
      </span>
    </button>
  `,
  styleUrls: ["./add-todo-list.component.css"]
})
export class AddTodoListComponent {
  constructor(
    private dialog: MatDialog,
    private todoListService: TodoListService
  ) {}

  openDialog(): void {
    const dialogRef: MatDialogRef<
      RenameTodoList,
      RenameTodoListData
    > = this.dialog.open(RenameTodoList, {
      width: "250px",
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data === undefined || !data.name) return;
      const { name } = data;
      const id: number = this.todoListService.saveNewName(name);
      this.todoListService.selectTodoList(id);
    });
  }
}
