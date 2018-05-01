
import {FormControl} from "@angular/forms";
export class InputValidator {

  public static isNumber(c: FormControl): any {
    return isNaN(c.value) ? {number: true} : null;
  }

}
