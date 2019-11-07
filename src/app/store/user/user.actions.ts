import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Login Form] Login',
  props<{ email: string; password: string; firstName: string; lastName: string;}>()
);

export const registerSuccess = createAction(
  '[Auth API] Login Success',
  props<{ accessToken: string; }>()
);

export const registerFail = createAction(
  '[Auth API] Login Fail',
  props<{ errorMsg: string; }>()
);

