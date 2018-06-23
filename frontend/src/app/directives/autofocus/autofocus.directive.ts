import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  @Input() private appAutofocus: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if(this.appAutofocus)
      this.el.nativeElement.focus();
  }

}
