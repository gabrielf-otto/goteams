import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import ReactLoading from 'react-loading';

import ProjectsActions from '../../store/ducks/projects';
import MembersActions from '../../store/ducks/members';

import { Container, Project } from './styles';
import Can from '../Can';
import Modal from '../Modal';
import Members from '../Members';
import Button from '../../styles/components/Button';


const Projects = (props) => {
   const {
      currentTeam,
      projects,
      getProjects,
      loading,
      createProjectRequest,

      isProjectModalVisible,
      openProjectModal,
      closeProjectModal,

      isMembersModalVisible,
      openMembersModal,

      theme
   } = props;

   const { register, handleSubmit, setValue } = useForm();

   useEffect(() => {
      getProjects();
   },
   []);

   const createProject = ({ title }) => {
      createProjectRequest(title);
      clearForm();
   };

   const clearForm = () => {
      setValue('title', '');
   };

   return (
      <Container bg={theme}>
         <header>
            <h1>{currentTeam? currentTeam.name: 'Selecione um Time'}</h1>
            <div>
               <Can hasPermission="create_projects">
                  <Button onClick={openProjectModal}>+ Novo</Button>
               </Can>
               <Button onClick={openMembersModal}>Membros</Button>
            </div>
         </header>

         { loading && (
            <span>
               <ReactLoading type="spin"/>
            </span> 
         ) }

         { projects.data.length !== 0? (
            <div className="projects">
               { projects.data.map(project => (
                  <Project key={project.id} bg={theme}>
                     <h3>{project.title}</h3>
                     <small>{project.created_at}</small>
                  </Project>
               )) }
            </div>
         ) : (
            <p>Esse time não possui projetos</p>
         ) }

         <Modal isVisible={isProjectModalVisible} bg={theme}>
            <h1>Novo projeto</h1>
            <form onSubmit={handleSubmit(createProject)} autoComplete="off">
               <span>Título</span>
               <input ref={register} name="title"/>

               <Button size="big" type="submit">Salvar</Button>
               <Button type="button" onClick={closeProjectModal} size="small" color="gray">
                  Cancelar
               </Button>
            </form>
         </Modal>

         <Members isVisible={isMembersModalVisible}/>
      </Container>
   );
};


const mapStateToProps = state => ({
   currentTeam: state.teams.current,
   projects: state.projects,
   loading: state.projects.loading,

   isProjectModalVisible: state.projects.isProjectModalVisible,
   isMembersModalVisible: state.members.isMembersModalVisible,

   theme: state.themes.theme 
});

const mapDispatchToProps = dispatch => ({
   getProjects: () => dispatch(ProjectsActions.getProjectsRequest()),
   createProjectRequest: title => dispatch(ProjectsActions.createProjectRequest(title)),

   openProjectModal: () => dispatch(ProjectsActions.openProjectModal()),
   closeProjectModal: () => dispatch(ProjectsActions.closeProjectModal()),

   openMembersModal: () => dispatch(MembersActions.openMembersModal())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)
(Projects);
