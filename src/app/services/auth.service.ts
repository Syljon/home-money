import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  register(email: string, password: string, firstName: string, lastName: string): Observable<boolean> {
    return from(this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((w) => {
        return w.user.updateProfile({ displayName: firstName + " " + lastName }).then(() => true);
      }));
  }

  login(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(c => console.log(c)).catch(c=> console.log(c));
  }
}
