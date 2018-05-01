import {Component, OnInit, ViewChild} from "@angular/core";
import {HomeService} from "../../services/home/home.service";
import {User} from "./User";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AlertComponent} from "../../components/alert/alert.component";
import {AlertType} from "../../components/alert/AlertType";
import {TodoList} from "../../components/todo-list/TodoList";
import {ModalComponent} from "../../components/modal/modal.component";
import {Title} from "@angular/platform-browser";

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

  // -----------------------------------------------------------------------------------------

  constructor(
    private homeService: HomeService,
    private title: Title
  ) {
    this.homeService.getUserData()
      .then(res => this.user = res);
  }

  // -----------------------------------------------------------------------------------------

  ngOnInit() {
    this.title.setTitle("TODO List - Strona główna");

    this.addTodoListForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.editTodoListForm = new FormGroup({
      todoListID: new FormControl(''),
      name: new FormControl('')
    });
  }

  // -----------------------------------------------------------------------------------------

  public addTodoList(): void {
    if(!this.addTodoListForm.valid) {
      this.alert.setAlertType(AlertType.WARMING).show("Musisz wprowadzić nazwę listy");
    } else {
      this.valid = false;
      this.addTodoListForm.controls["name"].disable();
      this.homeService.addTodoList(this.addTodoListForm.value)
        .then(res => {
          if(typeof res == "object") {
            this.user.todoLists.unshift(res);
            this.alert.setAlertType(AlertType.SUCCESS).show("Lista została dodana pomyślnie");
          }
          else {
            this.alert.setAlertType(AlertType.WARMING).show(res);
          }
          this.valid = true;
          this.addTodoListForm.controls["name"].enable();
          this.addTodoListForm.reset();
        });
    }
  }

  // -----------------------------------------------------------------------------------------

  public openEditTodoListModal(todoList: TodoList): void {
    this.editTodoList = todoList;
    this.editTodoListForm.controls["todoListID"].setValue(todoList.id);
    this.editTodoListForm.controls["name"].setValue(todoList.name);
    this.editTodoListModal.show();
  }

  // -----------------------------------------------------------------------------------------

  public saveTodoList(): void {
    this.editTodoList.processing = true;
    this.homeService.editTodoList(this.editTodoListForm.value)
      .then(res => {
        const todoList: TodoList = this.user.todoLists.find(tl => tl.id == res.id);

        todoList.name = res.name;
        this.editTodoList.processing = false;
        this.alert.setAlertType(AlertType.SUCCESS).show("Lista została zaktualizowana pomyślnie");
      });
  }

  // -----------------------------------------------------------------------------------------

  public removeTodoList(todoListID: string): void {
    this.homeService.removeTodoList(todoListID)
      .then(res => {
        if(res) {
          const todoList = this.user.todoLists.find(tl => tl.id == todoListID);
          this.user.todoLists.splice(this.user.todoLists.indexOf(todoList), 1);
          this.alert.setAlertType(AlertType.SUCCESS).show(res.content);
        }
      });
  }

}
