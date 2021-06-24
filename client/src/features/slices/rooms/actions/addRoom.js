import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {addRoom} from "../rooms";
import {v4 as uuidv4} from "uuid";

export const addRoomToBd = createAsyncThunk(
	'rooms/addRoomToBd',
	async ({quantity, roomName, roomDescription, users, messages}, {dispatch}) => {
	  let newRoom = {
		quantity,
		roomName,
		roomDescription,
		users,
		messages
	  }
	  return axios({
		method: "post",
		data: newRoom,
		url: '/newRoom',
		withCredentials: true
	  }).then(res => {
		dispatch(addRoom({...newRoom, _id: uuidv4()}))
		return res.data
	  })
	}
)