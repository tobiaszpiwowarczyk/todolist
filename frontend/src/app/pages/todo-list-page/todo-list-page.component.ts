import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { AlertType } from '../../components/alert/AlertType';
import { AlertComponent } from "../../components/alert/alert.component";
import { DropdownValue } from "../../components/dropdown/DropdownValue";
import { ModalComponent } from "../../components/modal/modal.component";
import { Todo } from "../../components/todo/Todo";
import { HomeService } from "../../services/home/home.service";
import { TodoListService } from "../../services/todo-list/todo-list.service";
import { TodoList } from './../../components/todo-list/TodoList';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: [
    '../../../assets/home-page.scss',
    "./todo-list-page.component.scss"
  ],
  providers: [TodoListService, HomeService]
})
export class TodoListPageComponent implements OnInit {

  err: any;
  valid: boolean = true;

  todoList: TodoList;
  priorities: DropdownValue[];

  addTodoForm: FormGroup;
  editTodoForm: FormGroup;

  editedTodo: Todo;

  @ViewChild("alert") alert: AlertComponent;
  @ViewChild("infoModal") infoModal: ModalComponent;
  @ViewChild("editModal") editModal: ModalComponent;

  // -----------------------------------------------------------------------------------------

  constructor(
    private todoListService: TodoListService,
    private route: ActivatedRoute,
    private title: Title,
    private fb: FormBuilder
  ) {}

  // -----------------------------------------------------------------------------------------

  ngOnInit() {
    this.route.params.subscribe(r => {
      this.todoListService.getTodoList(r.id)
        .subscribe(res => {
          this.todoList = res;
          this.title.setTitle("TODO List - " + res.name);
        },
        err => this.err = err);
    });

    this.todoListService.getPriorities()
      .subscribe(res => this.priorities = res, err => this.err = err);

    this.addTodoForm = this.fb.group({
      content: ["", Validators.required]
    });

    this.editTodoForm = this.fb.group({
      id: ["", Validators.required],
      content: ["", Validators.required],
      priority: {},
      completed: false
    });
  }

  // -----------------------------------------------------------------------------------------

  public addTodo() {
    if(this.addTodoForm.valid) {
      this.valid = false;
      this.addTodoForm.controls["content"].disable();

      this.todoListService.addTodo(this.todoList.id, this.addTodoForm.value)
        .subscribe(res => {
          this.todoList.todos.unshift(res);
          this.valid = true;
          this.addTodoForm.reset();
          this.addTodoForm.controls["content"].enable();
          this.alert
            .setAlertType(AlertType.SUCCESS)
            .show("Element Todo został dodany pomyślnie");
        },
        err => this.handleError(err));
    }
    else {
      this.alert
        .setAlertType(AlertType.WARMING)
        .show("Musisz wprowadzić treść zdania");
    }
  }

  // -----------------------------------------------------------------------------------------

  public openEditModal(todo: Todo) {
    this.editedTodo = todo;
    this.editTodoForm.setValue({
      id: todo.id,
      content: todo.content,
      priority: todo.priority,
      completed: todo.completed
    });
    this.editModal.show();
  }
  // -----------------------------------------------------------------------------------------
  public editTodo() {

    const result = {
      id: this.editTodoForm.value.id,
      content: this.editTodoForm.value.content,
      priority: this.editTodoForm.value.priority.value,
      completed: this.editTodoForm.value.completed
    };

    this.editedTodo.processing = true;

    this.todoListService.updateTodo(result)
      .subscribe((res: Todo) => {
        const todo: Todo = this.todoList.todos.find(x => x.id == res.id);

        todo.content = res.content;
        todo.priority = res.priority;
        todo.completed = res.completed;

        this.editedTodo.processing = false;
        this.alert
          .setAlertType(AlertType.SUCCESS)
          .show("Obiekt Todo został zaktualizowany pomyślnie");
        this.editedTodo = null;
      },
      err => this.handleError(err));
  }

  // -----------------------------------------------------------------------------------------

  public info(todo: Todo) {
    this.editedTodo = todo;
    this.infoModal.show();
  }

  // -----------------------------------------------------------------------------------------

  public completeTodo(todo: Todo) {
    const result = {
      id: todo.id,
      content: todo.content,
      priority: todo.priority.value,
      completed: !todo.completed
    };

    todo.processing = true;

    this.todoListService.updateTodo(result)
      .finally(() => todo.processing = false)
      .subscribe(res => {
        todo.completed = res.completed;
        this.alert
          .setAlertType(AlertType.SUCCESS)
          .show("Obiekt Todo został zaktualizowany pomyślnie");
      },
      err => this.handleError(err));
  }

  // -----------------------------------------------------------------------------------------

  public removeTodo(todo: Todo): void {
    this.todoListService.removeTodo(todo.id)
      .subscribe(res => {
        this.todoList.todos.splice(this.todoList.todos.indexOf(todo), 1);
        this.alert
          .setAlertType(AlertType.SUCCESS)
          .show("Obiekt Todo został usuniety pomyślnie");
      },
      err => this.handleError(err));
  }



  private handleError(err: any): any {
    this.alert.setAlertType(AlertType.WARMING).show(err.message);
  }
}
