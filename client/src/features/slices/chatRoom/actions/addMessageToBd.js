import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import {addMessage} from "../chatRoom";

export const addMessageToBd = createAsyncThunk(
	'chatRoom/addMessageToBd',
	async ({roomName, text}, {dispatch}) => {
	  let newMessage = {
		roomName: roomName,
		message: {
		  _id: uuidv4(),
		  text
		}
	  }
	  return axios({
		method: "put",
		data: newMessage,
		url: '/add_message',
		withCredentials: true
	  }).then(res => {
		dispatch(addMessage(newMessage.message))
		console.log(res.data)
		return res.data
	  });
	}
)