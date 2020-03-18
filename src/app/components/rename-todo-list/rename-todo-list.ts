import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface RenameTodoListData {
  name: string;
}

@Component({
  selector: "rename-todo-list",
  template: `
    <mat-form-field>
      <input
        matInput
        placeholder="Enter name here..."
        value="{{ data.name }}"
        [(ngModel)]="data.name"
        (keyup.enter)="onEnter()"
      />
    </mat-form-field>
  `,
  styles: [``]
})
export class RenameTodoList {
  constructor(
    public dialogRef: MatDialogRef<RenameTodoList, RenameTodoListData>,
    @Inject(MAT_DIALOG_DATA) public data: RenameTodoListData
  ) {}

  onEnter() {
    this.dialogRef.close(this.data);
  }
}
