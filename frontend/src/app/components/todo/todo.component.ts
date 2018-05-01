import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  @Output() onEdit: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onInfo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onComplete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}
  ngOnInit() {}

  public edit() {
    this.onEdit.emit(this.todo);
  }
  public info() {
    this.onInfo.emit(this.todo);
  }
  public complete() {
    this.onComplete.emit(this.todo);
  }
  public delete() {
    this.onDelete.emit(this.todo);
  }
}
