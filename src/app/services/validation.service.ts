import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      'required': 'That field is required',
      'email': 'Invalid email address',
      'pattern': 'Invalid format',
      'minlength': `Password must be at least ${validatorValue.requiredLength} characters`
    };
    return messages[validator];
  }
}
