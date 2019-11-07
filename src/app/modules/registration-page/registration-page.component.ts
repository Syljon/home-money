import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  validate: Subject<void> = new Subject<void>();

  constructor(private _formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnChanges() {
    this.validate.next();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-ZąĄćĆęĘłŁńŃóÓśŚżŻźŹ]*")])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-ZąĄćĆęĘłŁńŃóÓśŚżŻźŹ]*")])]
    });
  }

  Next(fg: FormGroup) {
    fg.markAllAsTouched();
    console.log(fg);
  }

  Create() {

  }
}
