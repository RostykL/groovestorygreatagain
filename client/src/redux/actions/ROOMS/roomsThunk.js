import axios from "axios";
import {rooms_failed, rooms_fetched, rooms_start} from "./rooms";

export default function fetchRooms() {
  return dispatch => {
	dispatch(rooms_start())
	axios({
	  method: "GET",
	  withCredentials: true,
	  url: "http://localhost:4444/rooms",
	})
		.then(res => dispatch(rooms_fetched(res.data)))
		.catch(e => dispatch(rooms_failed(e)))
  }
}