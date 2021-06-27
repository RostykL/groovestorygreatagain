import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from './features/store'
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./styled/appStyled";
import io from 'socket.io-client'

import SocketContext from './helpers/ws/socket'
const ENDPOINT = "ws://localhost:4444";

const socket = io(ENDPOINT, {transports: ['websocket']});

ReactDOM.render(
	<Provider store={store}>
	  <React.StrictMode>
		<GlobalStyle/>
		<Router>
		  <SocketContext.Provider value={socket}>
		  <App/>
		  </SocketContext.Provider>
		</Router>
	  </React.StrictMode>
	</Provider>,
	document.getElementById('root')
);