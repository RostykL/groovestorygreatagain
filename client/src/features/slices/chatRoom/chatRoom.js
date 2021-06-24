import {createSlice} from "@reduxjs/toolkit";
import {getRoom} from "./actions/getRoom";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  room: {
	quantity: 0,
	roomName: null,
	roomDescription: null,
	users: [],
	messages: []
  },
  status: null
}

const chatRoom = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.room.messages.push(action.payload)
	}
  },
  extraReducers: {
	[getRoom.pending]: (state) => {
	  state.status = 'loading';
	},
	[getRoom.fulfilled]: (state, action) => {
	  state.room = {...action.payload};
	  state.status = 'success';
	},
	[getRoom.rejected]: (state) => {
	  state.status = 'failed';
	}
  }
})

export const {addMessage} = chatRoom.actions

export default chatRoom.reducer;