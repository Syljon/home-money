import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatStepper } from '@angular/material';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  validate: Subject<void> = new Subject<void>();

  constructor(private _formBuilder: FormBuilder) { 
  }

  ngOnChanges() {
    this.validate.next();
  }

  ngOnInit() { 
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.compose([ Validators.required, Validators.email])],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(6)])]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstName: ['', Validators.compose([ Validators.required, Validators.pattern("[a-zA-ZąĄćĆęĘłŁńŃóÓśŚżŻźŹ]*")])],
      lastName: ['', Validators.required]
    });
  }

  Next(fg: FormGroup){
    fg.markAllAsTouched();
    console.log(fg);
  }
}
