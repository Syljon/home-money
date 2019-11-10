import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from 'src/app/store/user/user.states';
import * as UserActions from 'src/app/store/user/user.actions'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  validate: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private store: Store<User>) {
  }

  ngOnChanges() {
    this.validate.next();
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    this.firstFormGroup.markAllAsTouched();
    if(this.firstFormGroup.invalid) return;
    this.store.dispatch(UserActions.login({
      email: this.firstFormGroup.value['email'],
      password: this.firstFormGroup.value['password']
    }));
  }
}
