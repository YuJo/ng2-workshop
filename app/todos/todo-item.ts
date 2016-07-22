import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'todo-item',
    templateUrl:'./todo-item.html'
})

export class TodoItemComponent{
    @Input()
    todoItem:string;
    @Input()
    todoIndex:number;
    @Output()
    remove:EventEmitter<number> = new EventEmitter<number>();
    constructor(){
    }
    removeClicked(){
        this.remove.emit(this.todoIndex);
    }
}