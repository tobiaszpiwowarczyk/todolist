
export class IAlertType {
  icon: string;
  name: string;
}

export class AlertType {
  public static WARMING: IAlertType = {icon: "exclamation-triangle", name: "warming"};
  public static SUCCESS: IAlertType = {icon: "check-circle", name: "success"};
}

