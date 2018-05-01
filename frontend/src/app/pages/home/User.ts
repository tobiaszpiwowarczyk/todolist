
import {TodoList} from "../../components/todo-list/TodoList";

export class User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  roles: string[];
  todoLists: TodoList[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
