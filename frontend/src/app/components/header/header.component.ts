import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LoginService]
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(
    private _ls: LoginService
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem("fullName");
  }

  logout() {
    this._ls.logout();
  }
}
