import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import TeamsActions from '../../store/ducks/teams';
import AuthActions from '../../store/ducks/auth';
import ThemesActions from '../../store/ducks/themes';

import { Container, TeamList, Team, NewTeam, ThemeButton, Signout } from './styles';
import Can from  '../Can';
import Modal from '../Modal';
import Theme from '../Theme';
import Button from '../../styles/components/Button';


const TeamSwitcher = (props) => {
   const { 
      teams, 
      getTeams, 
      selectTeam, 

      isTeamModalVisible,
      openTeamModal,
      closeTeamModal,
      
      createTeamRequest,

      openThemeModal,
      theme,

      signOut
   } = props; 
   
   const { register, handleSubmit, setValue } = useForm();

   useEffect(() => {
      getTeams();
   },
   []);

   const createTeam = async ({ name }) => {
      createTeamRequest(name);
      clearForm();
   };

   const clearForm = () => {
      setValue('name', '');
   };

   return (
      <Container bg={theme}>
         <TeamList>
            { teams.map(team => (
               <Team key={team.id} onClick={() => selectTeam(team)}>
                  <img 
                     alt={team.slug} 
                     src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`} 
                  />
               </Team>
            )) }
            <Can hasPermission="create_teams">
               <NewTeam onClick={openTeamModal}>TIME</NewTeam>
            </Can>

            <ThemeButton onClick={openThemeModal} bg={theme}/>

            <Modal isVisible={isTeamModalVisible} bg={theme}>
               <h1>Novo time</h1>
               <form onSubmit={handleSubmit(createTeam)} autoComplete="off">
                  <span>Nome</span>
                  <input ref={register} name="name" />

                  <Button type="submit" size="big">Salvar</Button>
                  <Button type="button" onClick={closeTeamModal} size="small" color="gray">
                     Cancelar
                  </Button>
               </form>
            </Modal>
         </TeamList>


         <Theme />

         <Signout onClick={() => signOut()}>SAIR</Signout>
      </Container>
   );
};


const mapStateToProps = state => ({
   teams: state.teams.data,
   isTeamModalVisible: state.teams.isTeamModalVisible,

   isThemeModalVisible: state.themes.isThemeModalVisible,
   theme: state.themes.theme
});

const mapDispatchToProps = dispatch => ({
   getTeams: () => dispatch(TeamsActions.getTeamsRequest()),
   selectTeam: team => dispatch(TeamsActions.selectTeam(team)),

   openTeamModal: () => dispatch(TeamsActions.openTeamModal()),
   closeTeamModal: () => dispatch(TeamsActions.closeTeamModal()),

   createTeamRequest: name => dispatch(TeamsActions.createTeamRequest(name)),

   openThemeModal: () => dispatch(ThemesActions.openThemeModal()),
   closeThemeModal: () => dispatch(ThemesActions.closeThemeModal()),

   signOut: () => dispatch(AuthActions.signOut())
});

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)
(TeamSwitcher);
