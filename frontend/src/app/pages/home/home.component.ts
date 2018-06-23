import {Component, OnInit, ViewChild} from "@angular/core";
import {HomeService} from "../../services/home/home.service";
import {User} from "./User";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AlertComponent} from "../../components/alert/alert.component";
import { AlertType } from '../../components/alert/AlertType';
import {TodoList} from "../../components/todo-list/TodoList";
import {ModalComponent} from "../../components/modal/modal.component";
import {Title} from "@angular/platform-browser";
import "rxjs/add/operator/finally";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../assets/home-page.scss',
    './home.component.scss'
  ],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  valid: boolean = true;

  user: User;
  addTodoListForm: FormGroup;
  editTodoListForm: FormGroup;

  editTodoList: TodoList;

  @ViewChild("alert") alert: AlertComponent;
  @ViewChild("editTodoListModal") editTodoListModal: ModalComponent;

  err;

  // -----------------------------------------------------------------------------------------

  constructor(
    private homeService: HomeService,
    private title: Title
  ) {
    this.homeService.getUserData()
      .subscribe(
        res => this.user = res,
        err => this.err = err
      );
  }

  // -----------------------------------------------------------------------------------------

  ngOnInit() {
    this.title.setTitle("TODO List - Strona główna");

    this.addTodoListForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.editTodoListForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('')
    });
  }

  // -----------------------------------------------------------------------------------------

  public addTodoList(): void {
    this.err = null;

    if(!this.addTodoListForm.valid) {
      this.alert.setAlertType(AlertType.WARMING).show("Musisz wprowadzić nazwę listy");
    } else {

      this.valid = false;
      this.addTodoListForm.controls["name"].disable();

      this.homeService.addTodoList(this.addTodoListForm.value)
        .finally(() => {
          this.valid = true;
          this.addTodoListForm.controls["name"].enable();
          this.addTodoListForm.reset();
        })
        .subscribe(res => {
          this.user.todoLists.unshift(res);
          this.alert.setAlertType(AlertType.SUCCESS).show("Lista została dodana pomyślnie");
        },
        err => this.handleError(err));
    }
  }

  // -----------------------------------------------------------------------------------------

  public openEditTodoListModal(todoList: TodoList): void {
    this.editTodoList = todoList;
    this.editTodoListForm.controls["id"].setValue(todoList.id);
    this.editTodoListForm.controls["name"].setValue(todoList.name);
    this.editTodoListModal.show();
  }

  // -----------------------------------------------------------------------------------------

  public saveTodoList(): void {
    this.err = null;
    this.editTodoList.processing = true;
    this.homeService.editTodoList(this.editTodoListForm.value)
      .finally(() => this.editTodoList.processing = false)
      .subscribe(res => {
        const todoList: TodoList = this.user.todoLists.find(tl => tl.id == res.id);

        todoList.name = res.name;
        this.alert.setAlertType(AlertType.SUCCESS).show("Lista została zaktualizowana pomyślnie");
      },
      err => this.handleError(err));
  }

  // -----------------------------------------------------------------------------------------

  public removeTodoList(todoListID: string): void {
    this.err = null;
    this.homeService.removeTodoList(todoListID)
      .subscribe(res => {
        const todoList = this.user.todoLists.find(tl => tl.id == todoListID);
        this.user.todoLists.splice(this.user.todoLists.indexOf(todoList), 1);
        this.alert.setAlertType(AlertType.SUCCESS).show(res.state);
      },
      err => this.handleError(err));
  }


  private handleError(err: any) {
    this.alert.setAlertType(AlertType.WARMING).show(err.message);
  }
}
