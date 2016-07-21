import { Component } from '@angular/core';
import { TodoStoreComponent } from "./todos/todo-store.ts";

@Component({
  selector:'todo-app',
  template: '<todo-store></todo-store>',
  directives:[TodoStoreComponent]
})
export class AppComponent {
  constructor() {
  }
}