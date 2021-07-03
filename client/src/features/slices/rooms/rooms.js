import { createSlice } from '@reduxjs/toolkit';
import { getRooms } from './actions/getRooms';

const initialState = {
  rooms: [],
  status: null,
};

export const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
      state.status = 'success';
    },
  },
  extraReducers: {
    [getRooms.pending]: state => {
      state.status = 'loading';
    },
    [getRooms.fulfilled]: (state, action) => {
      state.rooms = action.payload;
      state.status = 'success';
    },
    [getRooms.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export const { addRoom } = roomSlice.actions;

export default roomSlice.reducer;
