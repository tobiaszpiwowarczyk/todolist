import {Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation, ElementRef} from "@angular/core";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: [
    './modal.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  private body: any = {};
  private modalBox: any = {};

  shown: boolean = false;
  content: string;

  @Input() title: string = "";

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onApprove: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onDeny: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private el: ElementRef
  ) {}
  ngOnInit() {
    this.body = document.querySelector("body");
    this.modalBox = this.el.nativeElement.querySelector(".modal__box");
  }

  public show() {
    this.body.classList.add("modal--shown");
    setTimeout(() => {
      this.modalBox.style.transform = "translateY(0)";
    }, 10);
    this.shown = true;
  }

  public hide(): void {
    this.modalBox.style.transform = "translateY(-200%)";
    setTimeout(() => {
      this.body.classList.remove("modal--shown");
      this.shown = false;
      this.onClose.emit(true);
    }, 200);
  }


  public setTitle(title: string): ModalComponent {
    this.title = title;
    return this;
  }
  public setContent(content: string): ModalComponent {
    this.content = content;
    return this;
  }

  public approved(callback) {
    callback();
  }
  public denied(callback): ModalComponent {
    callback();
    this.deny();

    return this;
  }

  approve(): void {
    this.onApprove.emit(true);
    this.hide();
  }
  deny(): void {
    this.onDeny.emit(true);
    this.hide();
  }

}
