import {Button, LeftSideBar, RoomsList} from "./leftsidebarStyled";
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-loader-spinner";
import {memo, useEffect} from "react";
import {NavLink} from "react-router-dom";
import RoomField from "../RoomField/RoomField";
import {getRooms} from "../../features/slices/rooms/actions/getRooms";



function Sidebar() {
  const dispatch = useDispatch();
  const roomsState = useSelector(state => state.rooms)

  useEffect(() => {
	dispatch(getRooms())
  }, [])

  return (
	  <LeftSideBar>
		<RoomsList>
		  {roomsState.status === 'loading' ? <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} /> : 'Rooms:'}
		  {roomsState.status === 'failed' ? <h3>Oppps, something went wrong</h3> : null}
		  {roomsState.status === 'success' && roomsState.rooms.map((el) => {
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
				// onClick={openPopup}
		>
		  Add room
		</Button>

	  </LeftSideBar>
  );
}

export default memo(Sidebar);