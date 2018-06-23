import { InputComponent } from './../../components/input/input.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AlertType } from "../../components/alert/AlertType";
import { AlertComponent } from "../../components/alert/alert.component";
import { LoginService } from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {


  @ViewChild("alert") alert: AlertComponent;
  @ViewChild("username") username: InputComponent;

  loginForm: FormGroup;
  submitted: boolean = false;
  valid: boolean = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private title: Title,
    private fb: FormBuilder
  ) {}


  ngOnInit() {
    this.title.setTitle("TODO List - Zaloguj się");

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.username.focus();
  }

  public login() {
    this.submitted = true;
    if(this.loginForm.valid) {
      this.valid = false;
      this.loginService.login(this.loginForm.value)
        .then(res => {
          this.router.navigate(["/home"]);
          this.valid = false;
        })
        .catch(err => {
          this.alert
              .setAlertType(AlertType.WARMING)
              .show("Nazwa użytkownika lub hasło jest nieprawidłowe");
            this.loginForm.reset();
            this.valid = true;
        });
    }
  }
}
