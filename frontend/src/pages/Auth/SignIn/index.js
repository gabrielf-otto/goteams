import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';

import AuthActions from '../../../store/ducks/auth';

import { Container, SignForm } from '../styles';
import Button from '../../../styles/components/Button';


const SignIn = ({ signInRequest, signInLoading, theme }) => {
   const { register, handleSubmit } = useForm();

   const signIn = ({ email, password }) => {
      signInRequest(email, password);
   };

   return (
      <Container bg={theme}>
         <SignForm onSubmit={handleSubmit(signIn)} bg={theme}>
            <h1>Login</h1>

            <span>E-mail</span>
            <input ref={register} type="email" name="email" required />

            <span>Senha</span>
            <input ref={register} type="password" name="password" required/>

            <Button type="submit" size="big" loading={signInLoading}>
               { signInLoading? (
                  <ReactLoading type="spin" width="30px" height="30px"/>
               ) : ( 
                  <>Entrar</> 
               ) }
            </Button>
         </SignForm>
      </Container>
   )
};


const mapStateToProps = state => ({
   signInLoading: state.auth.signInLoading,
   theme: state.themes.theme
});

const mapDispatchToProps = dispatch => ({
   signInRequest: (email, password) => dispatch(AuthActions.signInRequest(email, password))
});

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)
(SignIn);
