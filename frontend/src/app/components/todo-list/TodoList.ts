
import {Todo} from "../todo/Todo";
import {User} from "../../pages/home/User";

export class TodoList {
  id: string;
  name: string;
  createdDate: Date;
  user: User;
  prev: TodoList;
  next: TodoList;
  todos?: Todo[];
  todosSize?: number;
  processing: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
