import {Component, OnInit, ViewChild} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {TodoListService} from "../../services/todo-list/todo-list.service";
import {ActivatedRoute} from "@angular/router";
import {AlertComponent} from "../../components/alert/alert.component";
import {AlertType} from "../../components/alert/AlertType";
import {Todo} from "../../components/todo/Todo";
import {ModalComponent} from "../../components/modal/modal.component";
import {HomeService} from "../../services/home/home.service";
import {DropdownValue} from "../../components/dropdown/dropdown.component";
import {Title} from "@angular/platform-browser";

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

  status: number;
  valid: boolean = true;

  content: any;
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
    private title: Title
  ) {}

  // -----------------------------------------------------------------------------------------

  ngOnInit() {
    this.route.params.subscribe(r => {
      this.todoListService.getTodoList(r.id)
        .then(res => {
          this.status = res.status;
          this.content = res.content;
          if(res.status == 200) {
            this.title.setTitle("TODO List - " + res.content.name);
          }
        });
    });

    this.todoListService.getPriorities().then(res => this.priorities = res);

    this.addTodoForm = new FormGroup({
      content: new FormControl('', Validators.required)
    });
    this.editTodoForm = new FormGroup({
      todoID: new FormControl(''),
      content: new FormControl('', Validators.required),
      priority: new FormControl()
    });
  }

  // -----------------------------------------------------------------------------------------

  public addTodo() {
    if(this.addTodoForm.valid) {
      this.valid = false;
      this.addTodoForm.controls["content"].disable();

      this.todoListService.addTodo(this.content.id, this.addTodoForm.value)
        .then(res => {
          this.content.todos = res;
          this.valid = true;
          this.addTodoForm.reset();
          this.addTodoForm.controls["content"].enable();
          this.alert
            .setAlertType(AlertType.SUCCESS)
            .show("Element Todo został dodany pomyślnie");
        });
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
    this.editTodoForm.controls["todoID"].setValue(todo.id);
    this.editTodoForm.controls["content"].setValue(todo.content);
    this.editTodoForm.controls["priority"].setValue(todo.priority);
    this.editModal.show();
  }
  // -----------------------------------------------------------------------------------------
  public saveTodo() {
    const result = {
      todoID: this.editTodoForm.controls["todoID"].value,
      content: {
        content: this.editTodoForm.controls["content"].value,
        priority: this.editTodoForm.controls["priority"].value.value
      }
    };

    this.editedTodo.processing = true;
    this.todoListService.updateTodo(this.content.id, result)
      .then(res => {
        this.content.todos = res;
        this.editedTodo.processing = false;
        this.alert
          .setAlertType(AlertType.SUCCESS)
          .show("Obiekt Todo został zaktualizowany pomyślnie");
        this.editedTodo = null;
      });
  }

  // -----------------------------------------------------------------------------------------

  public info(todo: Todo) {
    this.editedTodo = todo;
    this.infoModal.show();
  }

  // -----------------------------------------------------------------------------------------

  public completeTodo(todo: Todo) {
    let result = {
      todoID: todo.id,
      content: {completed: !todo.completed}
    };
    todo.processing = true;
    this.todoListService.updateTodo(this.content.id, result)
      .then(res => {
        this.content.todos = res;
        this.alert
          .setAlertType(AlertType.SUCCESS)
          .show("Obiekt Todo został zaktualizowany pomyślnie");
      });
  }

  // -----------------------------------------------------------------------------------------

  public removeTodo(todo: Todo): void {
    this.todoListService.removeTodo(todo.id)
      .then(res => {
        if(res) {
          this.content.todos.splice(this.content.todos.indexOf(todo), 1);
          this.alert
            .setAlertType(AlertType.SUCCESS)
            .show("Obiekt Todo został usuniety pomyślnie");
        }
      })
  }
}
