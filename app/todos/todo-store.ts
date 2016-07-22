import {Component} from '@angular/core';
import { TodoItemComponent } from './todo-item';

@Component({
    selector:'todo-store',
    templateUrl:'./todo-store.html',
    directives: [TodoItemComponent] 
})

export class TodoStoreComponent{
    isDebug:boolean;
    newItem:string;
    todoList:Array<string>;
    constructor(){
        this.todoList = [];
        this.isDebug = false;
    }
    addItem(){
        this.todoList.push(this.newItem);
    }
}