import Sidebar from "../../components/LeftSidebar/Sidebar";
import Chat from "../../components/Chat/Chat";
import React, {memo} from "react";


function Home() {
  return (
  	<>
	  <Sidebar/>
	  <Chat/>
	</>
  )
}

export default memo(Home);