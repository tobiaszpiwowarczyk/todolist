import {Component, OnInit, ViewChild} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AlertComponent} from "../../components/alert/alert.component";
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import {AlertType} from "../../components/alert/AlertType";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  @ViewChild("alert") alert: AlertComponent;

  loginForm: FormGroup;
  submitted: boolean = false;
  valid: boolean = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private title: Title
  ) {}
  ngOnInit() {
    this.title.setTitle("TODO List - Zaloguj się");

    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  public login() {
    this.submitted = true;
    if(this.loginForm.valid) {
      this.valid = false;
      this.loginService.login(this.loginForm.value)
        .then(res => {
          if(res.status == 200) {
            this.router.navigate(["/home"]);
            this.valid = false;
          }
          else {
            this.alert
              .setAlertType(AlertType.WARMING)
              .show("Nazwa użytkownika lub hasło jest nieprawidłowe");
            this.loginForm.reset();
            this.valid = true;
          }
        });
    }
  }
}
