import { User } from './user.states';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: User = {
  id: 0,
  firstName: "string",
  lastName: "string",
  status: "string",
  role: "string"
};

export const userReducer = createReducer(initialState,

);

export function reducer(state: User | undefined, action: Action) {
  return userReducer(state, action);
}
