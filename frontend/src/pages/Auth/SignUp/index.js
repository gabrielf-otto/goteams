import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';

import AuthActions from '../../../store/ducks/auth';

import { Container, SignForm } from '../styles';
import Button from '../../../styles/components/Button';


const SignUp = ({ signUpRequest, signUpLoading, theme }) => {
   const { register, handleSubmit } = useForm();

   const signUp = ({ name, email, password }) => {
      signUpRequest(name, email, password);
   };

   return (
      <Container bg={theme}>
         <SignForm onSubmit={handleSubmit(signUp)} bg={theme}>
            <h1>Cadastrar</h1>

            <span>Nome</span>
            <input ref={register} name="name" required/>

            <span>E-mail</span>
            <input ref={register} type="email" name="email" required/>

            <span>Senha</span>
            <input ref={register} type="password" name="password" required/>

            <Button type="submit" size="big" loading={signUpLoading}>
               { signUpLoading? (
                  <ReactLoading type="spin" width="30px" height="30px"/>
               ) : (
                  <>Cadastrar</>
               ) }
            </Button>
         </SignForm>
      </Container>
   )
};


const mapStateToProps = state => ({
   signUpLoading: state.auth.signUpLoading,
   theme: state.themes.theme
});

const mapDispatchToProps = dispatch => ({
   signUpRequest: (name, email, password) => dispatch(AuthActions.signUpRequest(name, email, password))
});

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)
(SignUp);
