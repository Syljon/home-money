import { createAction, props } from '@ngrx/store';

export const Login = createAction(
    '[Login Page] Login',
    props<{ email: string, password: string }>()
);

export const LoginSuccess = createAction(
    '[Firebase API] Login Success',
    props<{  displayName: string, email: string, idToken: string, localId: string }>()
);

export const LoginFail = createAction(
    '[Firebase API] Login Fail'
);

export const Registration = createAction(
    '[Registration Page] Registration',
    props<{ email: string, password: string, firstName: string, lastName: string }>()
);

export const RegistrationSuccess = createAction(
    '[Firebase API] Registration Success'
);

export const RegistrationFail = createAction(
    '[Firebase API] Registration Fail'
);
