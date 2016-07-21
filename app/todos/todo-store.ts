import {Component} from '@angular/core';

@Component({
    selector:'todo-store',
    templateUrl:'./todo-store.html'
})

export class TodoStoreComponent{
    todoList:Array<string>;
    constructor(){
        this.todoList = [];
    }
}