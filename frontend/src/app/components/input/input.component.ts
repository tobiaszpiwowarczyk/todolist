import { ChangeDetectionStrategy, Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { InputErrors } from './InputErrors';


export const INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() submitted: boolean = false;
  @Input() icon: string;
  @Input() inputType: string = "text";
  @Input() label: string = "";
  @Input() inputErrors: InputErrors = new InputErrors();
  @Input() noBorder: boolean = false;
  @Input() value: string = "";

  disabled: boolean = false;
  focused: boolean = false;

  onChange = (_:any) => {};


  ngOnInit(): void {}


  public change(value) {
    this.value = value;
    this.onChange(value);
  }

  public focus() {
    this.focused = true;
  }
  public blur() {
    this.focused = false;
  }



  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

}
