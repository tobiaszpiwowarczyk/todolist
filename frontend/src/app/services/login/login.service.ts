import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Router} from "@angular/router";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {

  private headers: Headers;

  public readonly ITEM_STRING: string = "Token";

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.ITEM_STRING) != null;
  }

  public login(credentials: any): Promise<any> {
    return this.http.post(
      "/api/user/login",
      JSON.stringify(credentials),
      {
        headers: this.headers
      })
      .map(res => res.json())
      .toPromise()
      .then(res => {
        if(res.status == 200) {
          localStorage.setItem(this.ITEM_STRING, res.content.token);
          localStorage.setItem("fullName", res.content.userData.firstName + " " + res.content.userData.lastName);
        }
        return res;
      })
      .catch(err => JSON.parse(err._body));
  }

  public register(userData: any): Promise<any> {
    return this.http.post(
      "/api/user/register",
      JSON.stringify(userData),
      {
        headers: this.headers
      })
      .map(res => res.json())
      .toPromise();
  }

  public logout(): void {
    localStorage.removeItem(this.ITEM_STRING);
    localStorage.removeItem("fullName");
    this.router.navigate(["/login"]);
  }

}
