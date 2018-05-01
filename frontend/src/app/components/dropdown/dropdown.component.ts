import {Component, OnInit, forwardRef, Input, ElementRef, HostListener} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


export class DropdownValue {

  value: string;
  label: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input() valueLabel: DropdownValue;
  @Input() options: DropdownValue[];
  @Input() fluid: boolean = false;

  wrapper: any = {};
  opened: boolean = false;
  dropup: boolean = false;
  private propagateChange = (_: any) => {};


  constructor(
    private elRef: ElementRef
  ) {}
  ngOnInit() {
    this.wrapper = this.elRef.nativeElement;
    this.checkSize({
      target: {
        innerHeight: window.innerHeight
      }
    });
  }


  public toggle() {
    this.opened = !this.opened;
  }

  public select(value: DropdownValue): void {
    this.valueLabel = value;
    this.opened = false;
    this.propagateChange(value);
  }

  @HostListener("window:resize", ["$event"])
  public checkSize(evt) {
    let elTop = this.wrapper.getBoundingClientRect().top + window.scrollY;
    let elHeight = this.wrapper.querySelector(".dropdown").offsetHeight;
    let dropdownOptionsLength = this.wrapper.querySelector(".dropdown__options").childNodes.length - 3;

    this.dropup = (elTop + elHeight + (elHeight * dropdownOptionsLength)) > evt.target.innerHeight;
  }


  writeValue(value: any): void {
    this.valueLabel = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
