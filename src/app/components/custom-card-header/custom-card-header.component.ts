import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {
  RenameTodoList,
  RenameTodoListData
} from "../rename-todo-list/rename-todo-list";
import { TodoListService, TodoList } from "src/app/services/todo-list.service";

@Component({
  selector: "custom-card-header",
  template: `
    <div flexLayout="row" fxLayoutAlign="space-between">
      <mat-card-title fxFlexAlign="center">{{
        todoList.name || "placeholder"
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
  todoList: TodoList;

  constructor(
    private dialog: MatDialog,
    private todoService: TodoService,
    private todoListService: TodoListService
  ) {}
  ngOnInit(): void {
    this.todoListService.getTodoList().subscribe(t => (this.todoList = t));
  }

  public openDialog() {
    const dialogRef: MatDialogRef<
      RenameTodoList,
      RenameTodoListData
    > = this.dialog.open(RenameTodoList, {
      width: "250px",
      data: { name: this.todoList.name }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data === undefined || !data.name) return;
      const { name } = data;
      this.todoListService.saveName(this.todoList.id, name);
    });
  }

  public clearCompletedTodos() {
    this.todoService.clearCompletedTodos();
  }
}
