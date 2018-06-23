export class DropdownValue {
  value: string;
  label: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}