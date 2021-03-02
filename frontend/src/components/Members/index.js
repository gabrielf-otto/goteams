import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Select from 'react-select';
import api from '../../services/api';

import MembersActions from '../../store/ducks/members';

import { FaTrash } from 'react-icons/fa';

import Can from '../Can';
import Modal from '../Modal';
import Button from '../../styles/components/Button';
import { MembersList, Invite, Action } from './styles';


const Members = (props) => {
   const { register, handleSubmit, setValue } = useForm();
   const [roles, setRoles] = useState([]);

   const { 
      members, 
      getMembers, 
      
      isMembersModalVisible,
      closeMembersModal,

      updateMemberRequest,
      inviteMemberRequest,

      removeMember,

      theme
   } = props;

   useEffect(() => {
      getMembers();

      const getRoles = async () => {
         const response = await api.get('roles');
         setRoles(response.data);
      };

      getRoles();
   },
   []);

   const inviteMember = ({ email }) => {
      inviteMemberRequest(email);
      clearForm();
   };

   const clearForm = () => {
      setValue('email', '');
   };

   
   return (
      <Modal isVisible={isMembersModalVisible} size="big" bg={theme}>
         <h1>Membros</h1>

         <Can hasPermission="create_invites">
            <Invite onSubmit={handleSubmit(inviteMember)}>
               <input 
                  ref={register} 
                  name="email" 
                  placeholder="Convidar membro" 
                  required 
               />
               <Button type="submit">Enviar</Button>
            </Invite>
         </Can>
      
         <form autoComplete="off">
            <MembersList>
               { members.data.map(member => (
                  <li key={member.id}>
                     <Can hasRole="administrator">
                        <div>
                           <Action onClick={() => removeMember(member.id)}>
                              <FaTrash color="#fff"/>
                           </Action>
                        </div>
                     </Can>
                     
                     <strong>{member.user.name}</strong>
                     <Can hasRole="administrator">
                        { can => (
                              <Select
                                 isMulti
                                 isDisabled={!can}
                                 options={roles}
                                 defaultValue={member.roles}
                                 getOptionLabel={role => role.name}
                                 getOptionValue={role => role.id}
                                 onChange={value => updateMemberRequest(member.id, value)}
                              />
                           ) }
                     </Can>
                  </li>
               )) }
            </MembersList>
      
            <Button onClick={closeMembersModal} filled={false} color="gray">Fechar</Button>
         </form>
      </Modal>
   );
};


const mapStateToProps = state => ({
   members: state.members,
   isMembersModalVisible: state.members.isMembersModalVisible,

   theme: state.themes.theme
});

const mapDispatchToProps = dispatch => ({
   getMembers: () => dispatch(MembersActions.getMembersRequest()),
   closeMembersModal: () => dispatch(MembersActions.closeMembersModal()),
   updateMemberRequest: (id, roles) => dispatch(MembersActions.updateMemberRequest(id, roles)),
   inviteMemberRequest: email => dispatch(MembersActions.inviteMemberRequest(email)),

   removeMember: id => dispatch(MembersActions.removeMemberRequest(id))
});

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)
(Members);
