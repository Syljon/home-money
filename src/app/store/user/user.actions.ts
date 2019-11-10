import { createAction, props } from '@ngrx/store';
import { User } from 'firebase';

export const registration = createAction(
  '[Registration Form] Registration',
  props<{ email: string; password: string; firstName: string; lastName: string;}>()
);

export const registrationSuccess = createAction(
  '[Auth API] Registration Success',
  props<{ register: boolean}>()
);

export const registrationFail = createAction(
  '[Auth API] Registration Fail',
  props<{ errorMsg: string; }>()
);

export const login = createAction(
  '[Login Form] Login',
  props<{ email: string; password: string;}>()
);

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ user: User; }>()
);

export const loginFail = createAction(
  '[Auth API] Login Fail',
  props<{ errorMsg: string; }>()
);

