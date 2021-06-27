import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import {AppWrapper} from "./styled/appStyled";


import React, {useEffect} from "react";
import Home from "./pages/Home/Home";

import NewRoomPopup from "./components/CreateNewRoom/NewRoomPopup";
import Authenticate from "./pages/Authenticate/Authenticate";
import NotFound from "./pages/NotFound/NotFound";


function App() {
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
