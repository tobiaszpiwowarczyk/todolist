import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { TodoList } from "../../components/todo-list/TodoList";
import { Todo } from "../../components/todo/Todo";
import { DropdownValue } from './../../components/dropdown/DropdownValue';

@Injectable()
export class TodoListService {

  private headers: Headers;

  constructor(
    private http: Http
  ) {
    this.headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("Token")
    });
  }


  public getTodoList(todoListId: string): Observable<TodoList> {
    return this.http.get(`/api/todolist/${todoListId}`, {headers: this.headers})
      .map(res => new TodoList(res.json()))
      .catch(err => Observable.throw(err.json()));
  }


  public getPriorities(): Observable<DropdownValue[]> {
    return this.http.get("/api/todo/priorities", {headers: this.headers})
      .map(res => res.json().map(p => new DropdownValue(p)))
      .catch(err => Observable.throw(err.json()));
  }



  public addTodo(todoListID: string, todo: Todo): Observable<Todo> {
    return this.http.post(`/api/todo/${todoListID}`, JSON.stringify(todo), {headers: this.headers})
      .map(res => res.json())
      .catch(err => Observable.throw(err.json()));
  }




  public updateTodo(form: any): Observable<Todo> {
    return this.http.put(`/api/todo`, JSON.stringify(form), {headers: this.headers})
      .map(res => res.json())
      .catch(err => Observable.throw(err.json()));
  }

  public removeTodo(todoId: string): Observable<any> {
    return this.http.delete(`api/todo/${todoId}`, {headers: this.headers})
      .map(res => res.json())
      .catch(err => Observable.throw(err.json()));
  }
}
