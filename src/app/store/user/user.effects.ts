import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { register, registerSuccess, registerFail } from 'src/app/store/user/user.actions'
import { Router } from '@angular/router';
@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((action) =>
        this.auth.register(action.email, action.password, action.firstName, action.lastName)
          .pipe(
            map((data) => registerSuccess({ accessToken: 'data.token' })),
            catchError((error) => of(registerFail({ errorMsg: error.error })))
          ))
    )
  );

  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccess),
      tap(() =>
        this.router.navigate(["login"])
      )
    ),
    { dispatch: false }
  );


}
