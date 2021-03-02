import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Main from '../pages/Main';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';


const Routes = () => (
   <ConnectedRouter history={history}>
      <Switch>
         <Route path="/" exact component={Main} isPrivate />
         <Route path="/signin" component={SignIn} />
         <Route path="/signup" component={SignUp} />
      </Switch>
   </ConnectedRouter>
);


export default Routes;
