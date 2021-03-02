import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import MembersActions from '../ducks/members';
import { actions as toastrActions } from 'react-redux-toastr';


export function* getMembers() {
   try {
      const response = yield call(api.get, 'members');
      yield put(MembersActions.getMembersSuccess(response.data));
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao carregar os membros'
      }));
   }
};

export function* updateMember({ id, roles }) {
   try {
      yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });
      
      yield put(toastrActions.add({
         type: 'success',
         title: 'Sucesso',
         message: 'O membro foi atualizado'
      }));
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao atualizar o membro'
      }));
   }
};

export function* inviteMember({ email }) {
   try {
      yield call(api.post, 'invites', { email });

      yield put(toastrActions.add({
         type: 'success',
         title: 'Sucesso',
         message: 'Convite enviado'
      }));
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao convidar o membro'
      }));
   }
};

export function* removeMember({ id }) {
   try {
      yield call(api.delete, `members/${id}`);
      yield put(MembersActions.removeMemberSuccess(id));

      yield put(toastrActions.add({
         type: 'success',
         title: 'Sucesso',
         message: 'O membro removido do time'
      }));
   }
   catch (error) {
      yield put(toastrActions.add({
         type: 'error',
         title: 'Erro',
         message: 'Erro ao remover o membro'
      }));
   }
}
