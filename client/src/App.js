import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import {AppWrapper} from "./styled/appStyled";

import Authenticate from "./pages/Authenticate/Authenticate";
import NotFound from "./pages/NotFound/NotFound";

import React, {useEffect} from "react";
import Home from "./pages/Home/Home";
import axios from "axios";

import NewRoomPopup from "./components/CreateNewRoom/NewRoomPopup";
import {io} from "socket.io-client";

export let socket;

function App() {
  const history = useHistory()
  useEffect(() => {
	axios({
	  method: "GET",
	  withCredentials: true,
	  url: 'http://localhost:4444/user'
	}).then(res => {
	  const {username} = res.data;
	  if (username) {
		localStorage.setItem('user', JSON.stringify({name: username, in: true}))
	  } else {
		localStorage.removeItem('user')
		history.push('/authenticate')
	  }
	});
  }, [])


  return (
	  <AppWrapper>
		{/* Pop up */}
		<NewRoomPopup/>
		<Switch>
		  <Route exact path={"/"}>
			<Home/>
		  </Route>
		  <Route path={"/authenticate"}>
			<Authenticate/>
		  </Route>
		  <Route path={"/:roomName"}>
			<Home/>
		  </Route>

		  <Route path={"*"}>
			<NotFound/>
		  </Route>
		</Switch>
	  </AppWrapper>
  );
}

export default App;
