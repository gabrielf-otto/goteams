import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import TeamsActions from '../ducks/teams';
import { actions as toastrActions } from 'react-redux-toastr';


export function* getTeams() {
   try {
      const response = yield call(api.get, 'teams');
      yield put(TeamsActions.getTeamsSuccess(response.data));
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao carregar os times'
      }));
   }
};

export function* createTeam({ name }) {
   try {
      const response = yield call(api.post, 'teams', { name });
      yield put(TeamsActions.createTeamSuccess(response.data));
      yield put(TeamsActions.closeTeamModal());
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao criar time'
      }));
   }
};


