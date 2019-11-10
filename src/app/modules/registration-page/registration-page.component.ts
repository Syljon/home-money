import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/store/user/user.states';
import * as UserActions from 'src/app/store/user/user.actions'
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  validate: Subject<void> = new Subject<void>();

  constructor(private _formBuilder: FormBuilder, private auth: AuthService, private router: Router, private store: Store<User>) {
  }

  ngOnChanges() {
    this.validate.next();
  }

  ngOnInit() {
    this.Create();
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
    this.store.dispatch(UserActions.registration({
      email: 'syljon2@gmail.com',
      password: 'zxczxc',
      firstName: 'Lukasz',
      lastName: 'Siwiec'
    }))
  }
}
