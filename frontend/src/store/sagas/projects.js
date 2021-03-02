import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import ProjectsActions from '../ducks/projects';
import { actions as toastrActions } from 'react-redux-toastr';


export function* getProjects() {
   try {
      const response = yield call(api.get, 'projects');
      yield put(ProjectsActions.getProjectsSuccess(response.data));
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao carregar os projetos'
      }));
   }
};

export function* createProject({ title }) {
   try {
      const response = yield call(api.post, 'projects', { title });
      yield put(ProjectsActions.createProjectSuccess(response.data));
      yield put(ProjectsActions.closeProjectModal());
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao criar projeto'
      }));
   }
};
