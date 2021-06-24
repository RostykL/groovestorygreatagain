import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getRooms = createAsyncThunk(
	'rooms/getRooms',
	async () => {
	  return axios({
		method: "get",
		url: '/rooms',
		withCredentials: true
	  }).then(res => res.data)
	}
)