import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = "button";
  @Input() primary: boolean = true;
  @Input() large: boolean = false;
  @Input() fluid: boolean = false;
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
