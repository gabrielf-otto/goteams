import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../services/api';
import AuthActions from '../ducks/auth';
import { actions as toastrActions } from 'react-redux-toastr';


export function* signIn({ email, password }) {
   try {
      const response = yield call(api.post, 'auth', { email, password });

      localStorage.setItem('@app:token', response.data.token);
      localStorage.setItem('@app:signedIn', true);

      yield put(AuthActions.signInSuccess(response.data.token));
      yield put(push('/'));
   }
   catch (error) {
      yield put(AuthActions.signInFailure());
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Email ou senha incorreto'
      }));
   }
};

export function* signUp({ name, email, password }) {
   try {
      const response = yield call(api.post, 'users', { name, email, password });

      localStorage.setItem('@app:token', response.data.token);
      localStorage.setItem('@app:signedIn', true);

      yield put(AuthActions.signInSuccess(response.data.token));
      yield put(AuthActions.signUpAttempt());
      yield put(push('/'));
   }
   catch (error) {
      yield put(AuthActions.signUpAttempt());
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao cadastrar'
      }));
   }
};

export function* signOut() {
   localStorage.removeItem('@app:signedIn');
   localStorage.removeItem('@app:token');

   yield put(push('/signin'));
};

export function* getPermissions() {
   const signedIn = yield select(state => state.auth.signedIn);
   const currentTeam = yield select(state => state.teams.current);

   if (!signedIn || !currentTeam) {
      return;
   }

   const response = yield call(api.get, 'permissions');
   const { roles, permissions } = response.data;
   yield put(AuthActions.getPermissionsSuccess(roles, permissions));
};
