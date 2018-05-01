import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {User} from "../../pages/home/User";
import {TodoList} from "../../components/todo-list/TodoList";

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

  public getUserData(): Promise<User> {
    return this.http.get("/api/user/account", { headers: this.headers })
      .map(res => res.json())
      .toPromise()
      .then(res => new User({
          id: res.content.id,
          firstName: res.content.firstName,
          lastName: res.content.lastName,
          age: res.content.age,
          roles: res.content.roles,
          todoLists: res.content.todoLists.map(tl => new TodoList({
            id: tl.id,
            name: tl.name,
            createdDate: tl.createdDate,
            todosSize: tl.todos.length
          }))
        })
      );
  }


  public addTodoList(todoList: any): Promise<TodoList> {
    return this.http.post(
      "/api/todolist/add",
      JSON.stringify(todoList),
      {
        headers: this.headers
      })
      .map(res => res.json())
      .toPromise()
      .then(res => {
        if(res.status == 201) {
          let tl = res.content;
          return new TodoList({
            id: tl.id,
            name: tl.name,
            createdDate: tl.createdDate,
            todosSize: 0
          });
        }
        else if(res.status == 500) return res.content;
      });
  }


  public editTodoList(form: any): Promise<TodoList> {
    return this.http.post(
      `api/todolist/${form.todoListID}/update`,
      JSON.stringify({name: form.name}),
      {
        headers: this.headers
      })
      .map(res => res.json())
      .toPromise()
      .then(res => {
        console.log(res);
        if(res.status == 200) {
          return new TodoList({
            id: res.content.id,
            name: res.content.name,
            createdDate: res.content.createdDate,
            todosSize: res.content.todos.length
          });
        }
      });
  }


  public removeTodoList(todoListID: string): Promise<any> {
    return this.http.delete(
      `/api/todolist/${todoListID}/remove`,
      {
        headers: this.headers
      })
      .map(res => res.json())
      .toPromise();
  }
}
