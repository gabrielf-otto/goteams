import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';


const { Types, Creators } = createActions({
   getTeamsRequest: null,
   getTeamsSuccess: ['data'],
   selectTeam: ['team'],

   openTeamModal: null,
   closeTeamModal: null,

   createTeamRequest: ['name'],
   createTeamSuccess: ['team']
});

export const TeamsTypes = Types;
export default Creators; // TeamsActions


export const INITIAL_STATE = Immutable({
   data: [],
   current: JSON.parse(localStorage.getItem('@app:currentTeam')) || null,

   isTeamModalVisible: false
});

export const getTeamsSuccess = (state, { data }) => {
   const currentTeam = localStorage.getItem('@app:currentTeam') || null;
   let team;

   if (currentTeam) {
      team = JSON.parse(currentTeam);
   }
   else {
      team = data[0];
      localStorage.setItem('@app:currentTeam', JSON.stringify(team));
   }

   return state.merge({ data, current: team });
};

export const selectTeam = (state, { team }) => 
{
   localStorage.setItem('@app:currentTeam', JSON.stringify(team));
   return state.merge({ current: team });
};

export const createTeamSuccess = (state, { team }) => state.merge({ data: [...state.data, team] });

export const openTeamModal = state => state.merge({ isTeamModalVisible: true });
export const closeTeamModal = state => state.merge({ isTeamModalVisible: false });


export const reducer = createReducer(INITIAL_STATE, {
   [Types.GET_TEAMS_SUCCESS]: getTeamsSuccess,
   [Types.SELECT_TEAM]: selectTeam,
   
   [Types.OPEN_TEAM_MODAL]: openTeamModal,
   [Types.CLOSE_TEAM_MODAL]: closeTeamModal,

   [Types.CREATE_TEAM_SUCCESS]: createTeamSuccess
});
