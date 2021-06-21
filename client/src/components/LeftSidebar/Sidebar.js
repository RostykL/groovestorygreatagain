import {Button, LeftSideBar, RoomsList} from "./leftsidebarStyled";
import RoomField from "../RoomField/RoomField";
import {useEffect, useState} from "react";
import {toggle_popup} from "../../redux/actions/POPUP/togglePopup";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import fetchRooms from "../../redux/actions/ROOMS/roomsThunk";
import Loader from "react-loader-spinner";



export default function Sidebar() {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms)

  const openPopup = () => {
	dispatch(toggle_popup());
  }

  useEffect(() => {
	dispatch(fetchRooms())
  }, [])


  return (
	  <LeftSideBar>
		<RoomsList>
		  {rooms.loading ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} /> : 'Rooms:'}
		  {!rooms.loading && rooms && rooms.list.map((el) => {
			return (<NavLink to={el.roomName} key={el._id}>
			  <RoomField
				  title={el.roomName}
				  description={el.roomDescription}
				  qtyInRoom={{
					in: Math.floor(Math.random() * (2 - 1 + 1) + 1),
					max: 2
				  }}
			  /></NavLink>)
		  })}
		</RoomsList>
		<Button whileHover={{scale: 1.05}}
				whileTap={{scale: 0.95}}
				onClick={openPopup}
		>
		  Add room
		</Button>

	  </LeftSideBar>
  );
}