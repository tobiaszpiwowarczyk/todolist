import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Router} from "@angular/router";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private headers: Headers;
  private tokenHelper: JwtHelperService = new JwtHelperService();

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
      .catch(res => Observable.throw(res))
      .toPromise()
      .then(res => {

        const tokenDecoded =  this.tokenHelper.decodeToken(res.access_token);
        localStorage.setItem(this.ITEM_STRING, res.access_token);
        localStorage.setItem("fullName", tokenDecoded.firstName + " " + tokenDecoded.lastName);

        return res;
      });
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
