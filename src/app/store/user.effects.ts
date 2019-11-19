import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import {
    map,
    switchMap,
    catchError,
    filter,
    tap
} from "rxjs/operators";
import { of, pipe } from "rxjs";
import { Login, LoginSuccess, LoginFail, Registration, RegistrationSuccess, RegistrationFail } from './user.actions';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private service: AuthService,
        private router: Router
    ) { }

    Login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Login),
            switchMap(action =>
                this.service
                    .login(action.email, action.password
                    )
                    .pipe(
                        map((data) => LoginSuccess({
                            displayName: data.displayName,
                            email: data.email,
                            idToken: data.refreshToken,
                            localId: data.uid
                        })),
                        catchError(() => of(LoginFail()))
                    )
            )
        )
    );

    redirectAfterLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginSuccess), tap(() =>
                this.router.navigate(['dashboard'])
            )
        ),
        { dispatch: false }
    );

    Register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Registration),
            switchMap(action =>
                this.service
                    .register(action.email, action.password, action.firstName, action.lastName
                    )
                    .pipe(
                        map((data) => RegistrationSuccess()),
                        catchError(() => of(RegistrationFail()))
                    )
            )
        )
    );

    redirectAfterRegistration$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RegistrationSuccess), tap(() =>
                this.router.navigate(['login'])
            )
        ),
        { dispatch: false }
    );
}
