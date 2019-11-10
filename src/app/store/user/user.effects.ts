import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from 'src/app/store/user/user.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'firebase';
@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.registration),
      switchMap((action) =>
        this.auth.register(action.email, action.password, action.firstName, action.lastName)
          .pipe(
            map((data) => UserActions.registrationSuccess({register : data})
            ),
            catchError((error) => of(UserActions.registrationFail({ errorMsg: error.error })))
          ))
    )
  );

  redirectAfterRegistration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.registrationSuccess),
      tap(() =>
        this.router.navigate(["/login"])
      )
    ),
    { dispatch: false }
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      switchMap((action) =>
        this.auth.login(action.email, action.password)
          .pipe(
            map((data: User) => UserActions.loginSuccess({ user: data })
            ),
            catchError((error) => of(UserActions.loginFail({ errorMsg: error.error })))
          ))
    )
  );

  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccess),
      tap(() => {
        this.router.navigate(["/dashboard"]);
      }
      )
    ),
    { dispatch: false }
  );
}
