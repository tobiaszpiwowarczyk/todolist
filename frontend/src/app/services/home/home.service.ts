import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/toPromise";
import { TodoList } from "../../components/todo-list/TodoList";
import { User } from '../../pages/home/User';

@Injectable()
export class HomeService {

  private headers: Headers;

  constructor(
    private http: Http
  ) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", localStorage.getItem("Token"));
  }

  public getUserData(): Observable<User> {
    return this.http.get("/api/user/account", { headers: this.headers })
      .map(res => new User(res.json()))
      .catch(err => Observable.throw(err.json() || "Server error"));
  }


  public addTodoList(todoList: any): Observable<TodoList> {
    return this.http.post(
      "api/todolist",
      JSON.stringify(todoList),
      {
        headers: this.headers
      })
      .map(res => new TodoList(res.json()))
      .catch(err => Observable.throw(err.json()));
  }


  public editTodoList(form: any): Observable<TodoList> {
    return this.http.put(
      `api/todolist`,
      JSON.stringify(form),
      {
        headers: this.headers
      })
      .map(res => res.json())
      .catch(err => Observable.throw(err.json()));
  }


  public removeTodoList(todoListID: string): Observable<any> {
    return this.http.delete(
      `/api/todolist/${todoListID}`,
      {
        headers: this.headers
      })
      .map(res => res.json())
      .catch(err => Observable.throw(err.json()));
  }
}
