import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';


const { Types, Creators } = createActions({
   signInRequest: ['email', 'password'],
   signInSuccess: ['token'],
   signInFailure: null,

   signUpRequest: ['name', 'email', 'password'],
   signUpAttempt: null,

   signOut: null,

   getPermissionsSuccess: ['roles', 'permissions']
});

export const AuthTypes = Types;
export default Creators; // AuthActions


const INITIAL_STATE = Immutable({
   signedIn: !!localStorage.getItem('@app:signedIn'),
   token: localStorage.getItem('@app:token') || null,

   signInLoading: false,
   signUpLoading: false,

   roles: [],
   permissions: []
});


const signInRequest = state => state.merge({ signInLoading: true });
const signInSuccess = (state, { token }) => state.merge({ signedIn: true, token, signInLoading: false });
const signInFailure = state => state.merge({ signInLoading: false });

const signUpRequest = state => state.merge({ signUpLoading: true });
const signUpAttempt = state => state.merge({ signUpLoading: false });

const signOut = state => state.merge({ signedIn: false, token: null });
const getPermissionsSuccess = (state, { roles, permissions }) => state.merge({ roles, permissions });



export const reducer = createReducer(INITIAL_STATE, {
   [Types.SIGN_IN_REQUEST]: signInRequest,
   [Types.SIGN_IN_SUCCESS]: signInSuccess,
   [Types.SIGN_IN_FAILURE]: signInFailure,

   [Types.SIGN_UP_REQUEST]: signUpRequest,
   [Types.SIGN_UP_ATTEMPT]: signUpAttempt,

   [Types.SIGN_OUT]: signOut,

   [Types.GET_PERMISSIONS_SUCCESS]: getPermissionsSuccess
});
