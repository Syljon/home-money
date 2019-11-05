import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  register(user: any){
    this.fireAuth.auth.createUserWithEmailAndPassword("test@test.com", "qweqweqwe")
    .then((w) => {
      return w.user.updateProfile({displayName: "Jan Nowak" })
    })
  }
}
