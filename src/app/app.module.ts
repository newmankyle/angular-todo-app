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
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoListModule } from "./components/todo-list/todo-list.module";
import { TodoAdderComponent } from "./components/todo-adder/todo-adder.component";
import { CustomCardHeaderComponent } from "./components/custom-card-header/custom-card-header.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAdderComponent,
    CustomCardHeaderComponent
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
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
