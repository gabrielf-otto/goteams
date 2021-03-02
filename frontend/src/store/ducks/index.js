import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as teams } from './teams';
import { reducer as projects } from './projects';
import { reducer as members } from './members';
import { reducer as themes } from './themes';


export default combineReducers({
   router: connectRouter(history),
   toastr,
   auth,
   teams,
   projects,
   members,
   themes
});
