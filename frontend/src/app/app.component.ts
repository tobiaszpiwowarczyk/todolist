import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {


  constructor(
    private _ls: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {

    if(!this._ls.isAuthenticated()) {
      if(window.location.pathname != "/register") {
        this.router.navigate(["/login"]);
      }
    }
    else {
      this.router.navigate(["/home"]);
    }
  }
}
