import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from './features/store'
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./styled/appStyled";


ReactDOM.render(
	<Provider store={store}>
	  <React.StrictMode>
		<GlobalStyle/>
		<Router>
		<App/>
		</Router>
	  </React.StrictMode>
	</Provider>,
	document.getElementById('root')
);