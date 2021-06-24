import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getRoom = createAsyncThunk(
	'chatRoom/getRoom',
	async (roomName) => {
	  return axios({
		method: "post",
		data: {
		  roomName: roomName
		},
		url: '/room',
		withCredentials: true
	  }).then(res => res.data);
	}
)