import React from 'react';
import { connect } from 'react-redux';
import ThemesActions from '../../store/ducks/themes';

import { colors } from './themes';

import Modal from '../Modal';
import { Container, ThemeOption } from './styles';
import Button from '../../styles/components/Button';


const Theme = (props) => {
   const {
      theme,
      isThemeModalVisible,
      closeThemeModal,
      changeTheme
   } = props;


   return (
      <Modal isVisible={isThemeModalVisible} bg={theme}>
         <h1>Tema</h1>

         <Container>               
            { colors.map(color => (
               <ThemeOption key={color} bg={color} onClick={() => changeTheme(color)}/>
            )) }
         </Container>
         
         <Button onClick={closeThemeModal} filled={false} color="gray">Fechar</Button>
      </Modal>
   );
};


const mapStateToProps = state => ({
   theme: state.themes.theme,
   isThemeModalVisible: state.themes.isThemeModalVisible,
});

const mapDispatchToProps = dispatch => ({
   changeTheme: color => dispatch(ThemesActions.changeTheme(color)),
   closeThemeModal: () => dispatch(ThemesActions.closeThemeModal())
});


export default connect(
   mapStateToProps,
   mapDispatchToProps
)
(Theme);
