import { createReducer, on, Action } from '@ngrx/store';
import { Login, LoginSuccess, LoginFail } from './user.actions'
import { UserState } from './user.states';

export const initialState: UserState = {
    user: {
        displayName: null,
        email: null,
        idToken: null,
        localId: null
    }
};

export const settingsReducer = createReducer(initialState,
    on(Login, (state) => ({
        ...state,
        user: {
            ...initialState.user,
            displayName: null,
            email: null,
            idToken: null,
            localId: null
        }
    })),
    on(LoginSuccess, (state, action) => ({
        ...state,
        user: {
            ...initialState.user,
            displayName: action.displayName,
            email: action.email,
            idToken: action.idToken,
            localId: action.localId
        }
    })), on(LoginFail, (state) => ({
        ...state,
        user: {
            ...initialState.user,
            displayName: null,
            email: null,
            idToken: null,
            localId: null
        }
    })),
);

export function reducer(state: UserState | undefined, action: Action) {
    return settingsReducer(state, action);
}
