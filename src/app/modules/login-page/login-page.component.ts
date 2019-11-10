import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  validate: Subject<void> = new Subject<void>();

  constructor(private _formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnChanges() {
    this.validate.next();
  }

  ngOnInit() {
    this.auth.login('syljon2@gmail.com','zxczxc');
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  Next(fg: FormGroup) {
    fg.markAllAsTouched();
    console.log(fg);
  }

  Create() {
    
  }
}
