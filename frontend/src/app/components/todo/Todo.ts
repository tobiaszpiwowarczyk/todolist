import {DropdownValue} from "../dropdown/DropdownValue";

export class Todo {
  id: string;
  content: string;
  createdDate: Date;
  completed: boolean;
  priority: DropdownValue;

  processing: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
