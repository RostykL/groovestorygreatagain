import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from './actions/logoutUserAction';

const initialState = {
  status: null,
};

const logout = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: {
    [logoutUser.pending]: state => {
      state.status = 'loading';
    },
    [logoutUser.fulfilled]: state => {
      state.status = 'success';
    },
    [logoutUser.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export default logout.reducer;
