import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TodoList} from "./TodoList";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoList;

  @Output() onEdit: EventEmitter<TodoList> = new EventEmitter<TodoList>();
  @Output() onDelete: EventEmitter<TodoList> = new EventEmitter<TodoList>();


  constructor() {}
  ngOnInit() {}


  public edit() {
    this.onEdit.emit(this.todoList);
  }
  public delete() {
    this.onDelete.emit(this.todoList);
  }

}
