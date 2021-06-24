import Sidebar from "../../components/LeftSidebar/Sidebar";
import Chat from "../../components/Chat/Chat";
import React, {memo} from "react";
import {useParams} from "react-router-dom";


function Home() {
  const {roomName} = useParams()

  return (
	  <>
		<Sidebar/>
		{roomName ? <Chat/> : <h1>Choose a room to join</h1>}
	  </>
  )
}

export default Home;