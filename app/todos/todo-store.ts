import {Component} from '@angular/core';

@Component({
    selector:'todo-store',
    templateUrl:'./todo-store.html'
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