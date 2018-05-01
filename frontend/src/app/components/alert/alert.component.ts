import {Component, OnInit, Input} from "@angular/core";
import {IAlertType, AlertType} from "./AlertType";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message: string = "";
  @Input() alertType: IAlertType = AlertType.SUCCESS;

  shown: boolean = false;

  constructor() {}
  ngOnInit() {}

  public setAlertType(alertType: IAlertType): AlertComponent {
    this.alertType = alertType;

    return this;
  }

  public show(message: string) {
    if(this.alertType == null) {
      throw new Error("Nie podałeś typu powiadomienia");
    }
    this.message = message;
    this.shown = true;

    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  public hide() {
    this.shown = false;
  }
}
