import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';


export default function RouterWrapper({
   component: Component,
   isPrivate = false,
   ...rest
}) {
   const { signedIn } = store.getState().auth;

   if (!signedIn && isPrivate) {
      return <Redirect to="/signin" />
   }

   if (signedIn && !isPrivate) {
      return <Redirect to="/" />
   }

   return (
      <Route component={Component} {...rest} ></Route>
   );
}
