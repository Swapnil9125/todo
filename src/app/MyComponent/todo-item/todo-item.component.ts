import { Component, EventEmitter, Input, Output } from '@angular/core';
import {todo} from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()todo: todo = new todo;
  @Input()i: number | undefined;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter();

  onClick(todo: todo){
    this.todoDelete.emit(todo);
    console.log("On click event handler has been clicked")
  }

  onCheckboxClick(todo: todo | undefined){
this.todoCheckbox.emit(todo);
  }
}
