import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';


const { Types, Creators } = createActions({
   getProjectsRequest: ['team_id'],
   getProjectsSuccess: ['data'],

   openProjectModal: null,
   closeProjectModal: null,

   createProjectRequest: ['title'],
   createProjectSuccess: ['project']
});

export const ProjectsTypes = Types;
export default Creators; // ProjectsActions


const INITIAL_STATE = Immutable({
   data: [],
   loading: false,
   
   isProjectModalVisible: false
});

const getProjectsRequest = state => state.merge({ loading: true });
const getProjectsSuccess = (state, { data }) => state.merge({ data, loading: false });
const createProjectSuccess = (state, { project }) => state.merge({ data: [...state.data, project] });

const openProjectModal = state => state.merge({ isProjectModalVisible: true });
const closeProjectModal = state => state.merge({ isProjectModalVisible: false });


export const reducer = createReducer(INITIAL_STATE, {
   [Types.GET_PROJECTS_REQUEST]: getProjectsRequest,
   [Types.GET_PROJECTS_SUCCESS]: getProjectsSuccess,
   [Types.CREATE_PROJECT_SUCCESS]: createProjectSuccess,

   [Types.OPEN_PROJECT_MODAL]: openProjectModal,
   [Types.CLOSE_PROJECT_MODAL]: closeProjectModal
});
