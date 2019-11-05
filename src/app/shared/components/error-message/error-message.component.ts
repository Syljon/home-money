import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent implements OnInit {
  @Input() events: Observable<void>;
  @Input() control: FormControl;
  private validateClick: any;

  constructor() { }

  ngOnInit(): void {
    this.validateClick = this.events.subscribe(() => { return this.errorMessage });
  }

  ngOnDestroy() {
    this.validateClick.unsubscribe()
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidationMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
