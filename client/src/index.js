import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import store from './redux/store'
import {BrowserRouter as Router} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, serif;
    }

    ::-webkit-scrollbar {
        width: 0; 
        background: transparent;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 !important;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;


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