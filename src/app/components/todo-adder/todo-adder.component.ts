import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "todo-adder",
  templateUrl: "./todo-adder.component.html",
  styleUrls: ["./todo-adder.component.css"]
})
export class TodoAdderComponent implements OnInit {
  public name = "";

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public saveTodo() {
    if (this.name === undefined || this.name === "") {
      return;
    }
    this.todoService.saveTodo(this.name);
    this.name = "";
  }
}
