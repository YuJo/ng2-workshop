import {Component,Input} from '@angular/core';

@Component({
    selector:'todo-item',
    templateUrl:'./todo-item.html'
})

export class TodoItemComponent{
    @Input()
    todoItem:string;
    constructor(){
    }
}