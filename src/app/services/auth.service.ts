import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  register(email: string, password: string, firstName: string, lastName: string) : Observable<boolean> {
    var observableFromPromise = from(this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((w) => {
      return w.user.updateProfile({displayName: firstName + " " + lastName }).then(() =>  true);
    })) 
    return observableFromPromise;
  }
}
