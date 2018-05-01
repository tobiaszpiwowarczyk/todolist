import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {TodoList} from "../../components/todo-list/TodoList";
import {Todo} from "../../components/todo/Todo";
import {User} from "../../pages/home/User";
import {DropdownValue} from "../../components/dropdown/dropdown.component";

@Injectable()
export class TodoListService {

  private headers: Headers;

  constructor(
    private http: Http
  ) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", localStorage.getItem("Token"));
  }


  public getTodoList(todoListId: string): Promise<any> {
    return this.http.get(`/api/todolist/${todoListId}`, {headers: this.headers})
      .map(res => res.json())
      .toPromise()
      .then(res => {
        if(res.status == 200) {
          let x = res.content;
          return {
            status: res.status,
            content: new TodoList({
              id: x.id,
              name: x.name,
              createdDate: x.createdDate,
              prev: (x.prevTodoList != null) ? new TodoList(x.prevTodoList) : null,
              next: (x.nextTodoList != null) ? new TodoList(x.nextTodoList) : null,
              user: new User({
                id: x.user.id,
                firstName: x.user.firstName,
                lastName: x.user.lastName
              }),
              todos: x.todos.map(t => new Todo({
                id: t.id,
                content: t.content,
                completed: t.completed,
                createdDate: t.createdDate,
                priority: new DropdownValue(t.priority)
              }))
            })
          };
        }
        else return res;
      });
  }

  public getPriorities(): Promise<DropdownValue[]> {
    return this.http.get("/api/todo/priorities", {headers: this.headers})
      .map(res => res.json())
      .toPromise()
      .then(res => res.content.map(p => new DropdownValue(p)))
      .catch(err => Promise.reject(err));
  }

  public addTodo(todoListID: string, todo: any): Promise<Todo[]> {
    return this.http.post(`/api/todo/${todoListID}/add`, JSON.stringify(todo), {headers: this.headers})
      .map(res => res.json())
      .toPromise()
      .then(res => (res.status == 201) ? res.content.map(t => new Todo({
        id: t.id,
        content: t.content,
        createdDate: t.createdDate,
        completed: t.completed,
        priority: new DropdownValue(t.priority)
      })) : null)
      .catch(err => Promise.reject(err));
  }

  public updateTodo(todoListID: string, form: any): Promise<Todo[]> {
    return this.http.post(
      `/api/todo/${todoListID}/${form.todoID}/update`,
      JSON.stringify(form.content),
      {
        headers: this.headers
      })
      .map(res => res.json())
      .toPromise()
      .then(res => (res.status == 200) ?
        res.content.map(t => new Todo({
          id: t.id,
          content: t.content,
          createdDate: t.createdDate,
          completed: t.completed,
          priority: new DropdownValue(t.priority)
        }))
       : null)
      .catch(err => Promise.reject(err));
  }

  public removeTodo(todoId: string): Promise<boolean> {
    return this.http.delete(`api/todo/${todoId}/remove`, {headers: this.headers})
      .toPromise()
      .then(res => res.status == 200);
  }
}
