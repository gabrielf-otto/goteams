import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';


const { Types, Creators } = createActions({
   getMembersRequest: null,
   getMembersSuccess: ['data'],

   openMembersModal: null,
   closeMembersModal: null,

   updateMemberRequest: ['id', 'roles'],
   inviteMemberRequest: ['email'],

   removeMemberRequest: ['id'],
   removeMemberSuccess: ['id']
});

export const MembersTypes = Types;
export default Creators; // MembersActions


const INITIAL_STATE = Immutable({
   data: [],
   isMembersModalVisible: false
});

const getMembersSuccess = (state, { data }) => state.merge({ data });

const openMembersModal = state => state.merge({ isMembersModalVisible: true });
const closeMembersModal = state => state.merge({ isMembersModalVisible: false });

const updateMemberRequest = (state, { id, roles }) => state.merge({
   data: state.data.map(member => member.id === id? { ...member, roles }: member)
});

const removeMemberSuccess = (state, { id }) => state.merge({ data: state.data.filter(member => member.id !== id) });


export const reducer = createReducer(INITIAL_STATE, {
   [Types.GET_MEMBERS_SUCCESS]: getMembersSuccess,

   [Types.OPEN_MEMBERS_MODAL]: openMembersModal,
   [Types.CLOSE_MEMBERS_MODAL]: closeMembersModal,

   [Types.UPDATE_MEMBER_REQUEST]: updateMemberRequest,

   [Types.REMOVE_MEMBER_SUCCESS]: removeMemberSuccess
});
