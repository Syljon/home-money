import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  validate: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {
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

  }
}
