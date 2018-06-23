import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AlertType } from "../../components/alert/AlertType";
import { AlertComponent } from "../../components/alert/alert.component";
import { LoginService } from "../../services/login/login.service";
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    LoginService
  ]
})
export class RegisterComponent implements OnInit {

  @ViewChild("alert") alert: AlertComponent;
  @ViewChild("username") username: InputComponent

  registerForm: FormGroup;

  submitted: boolean = false;
  valid: boolean = true;

  // -----------------------------------------------------------------------------------

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.username.focus();
  }

  // -----------------------------------------------------------------------------------

  public register() {
    this.submitted = true;
    if(this.registerForm.valid) {
      this.valid = false;
      this.loginService.register(this.registerForm.value)
        .then(res => {
          if(res.status == 201) {
            this.alert
              .setAlertType(AlertType.SUCCESS)
              .show("Rejestracja zakończyła się pomyślnie. Możesz się teraz zalogować");

            setTimeout(() => this.router.navigate(['/login']), 3000);
          }
          else {
            this.submitted = false;
            this.valid = true;
            this.registerForm.reset();
            this.alert
              .setAlertType(AlertType.WARMING)
              .show(res.content);
          }
        });
    }

  }
}
