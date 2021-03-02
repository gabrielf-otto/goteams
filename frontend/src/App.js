import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import ReduxToastr from 'react-redux-toastr';


const App = () => (
	<Provider store={store}>
		<Routes />
		<GlobalStyle />
		<ReduxToastr 
			closeOnToastrClick 
			preventDuplicates 
			timeOut={4000}
			transitionIn="fadeIn"
      	transitionOut="fadeOut"
		/>
	</Provider>	
);


export default App;
