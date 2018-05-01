import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginService} from "../../services/login/login.service";
import {AlertComponent} from "../../components/alert/alert.component";
import {AlertType} from "../../components/alert/AlertType";
import {InputValidator} from "../../components/input/input.validator";
import {Router} from "@angular/router";

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

  registerForm: FormGroup;

  submitted: boolean = false;
  valid: boolean = true;

  // -----------------------------------------------------------------------------------

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)])),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.compose([Validators.required, InputValidator.isNumber]))
    });
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
