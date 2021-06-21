import {Button, LeftSideBar, RoomsList} from "./leftsidebarStyled";
import {motion} from "framer-motion"
import RoomField from "../RoomField/RoomField";
import {useEffect, useState} from "react";
import {toggle_popup} from "../../redux/actions/POPUP/togglePopup";
import {useDispatch} from "react-redux";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {io} from "socket.io-client";

let socket;

export default function Sidebar() {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);

  const openPopup = () => {
	dispatch(toggle_popup());
  }

  useEffect(() => {
	axios({
	  method: "GET",
	  withCredentials: true,
	  url: "http://localhost:4444/rooms",
	}).then(res => setRooms(res.data))
  }, [])

  return (
	  <LeftSideBar>
		<RoomsList>
		  Rooms:
		  {rooms && rooms.map((el, i) => {
			return (<NavLink to={el.roomName} key={el._id}><RoomField
				title={el.roomName}
				description={el.roomDescription}
				qtyInRoom={{
				  in: Math.floor(Math.random() * (2 - 1 + 1) + 1),
				  max: 2
				}}
				// onClick={() => joinRoom(el.name)}
			/></NavLink>)
		  })}
		</RoomsList>
		<Button whileHover={{scale: 1.05}}
				whileTap={{scale: 0.95}}
				onClick={openPopup}
		>
		  add room
		</Button>

	  </LeftSideBar>
  );
}