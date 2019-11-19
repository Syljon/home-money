import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  register(email: string, password: string, firstName: string, lastName: string): Observable<boolean> {
    return from(this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((w) => w.user.updateProfile({ displayName: firstName + " " + lastName }).then(() => true)
      ));
  }

  login(email: string, password: string) {
    return from(this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(data => data.user));
  }
}
