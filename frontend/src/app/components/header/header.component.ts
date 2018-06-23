import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LoginService]
})
export class HeaderComponent implements OnInit {

  username: string;
  menuOpened: boolean = false;

  constructor(
    private _ls: LoginService
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem("fullName");
  }

  logout() {
    this._ls.logout();
  }

  public openMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  @HostListener("window:click", ['$event'])
  public closeMenu(evt): void {
    const className = evt.target.className.split(" ")[0];
    if(className != "header__menu" && className != "header__menu__opener" && this.menuOpened) {
      this.menuOpened = false;
      console.log(this.menuOpened);
    }
  }
}
