import {Component} from '@angular/core';

@Component({
    selector:'todo-store',
    templateUrl:'./todo-store.html'
})

export class TodoStoreComponent{
    newItem:string="Todo...";
    todoList:Array<string>;
    constructor(){
        this.todoList = [];
    }
}