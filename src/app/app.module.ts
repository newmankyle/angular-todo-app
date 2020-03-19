import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoListModule } from "./components/todo-list/todo-list.module";
import { TodoAdderComponent } from "./components/todo-adder/todo-adder.component";
import { CustomCardHeaderComponent } from "./components/custom-card-header/custom-card-header.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RenameTodoList } from "./components/rename-todo-list/rename-todo-list";
import { ListPickerComponent } from './components/list-picker/list-picker.component';
import { AddTodoListComponent } from './components/add-todo-list/add-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAdderComponent,
    RenameTodoList,
    CustomCardHeaderComponent,
    ListPickerComponent,
    AddTodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    TodoListModule
  ],
  entryComponents: [RenameTodoList],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
