import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/loginUserAction';

const initialState = {
  status: null,
};

const login = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: state => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: state => {
      state.status = 'success';
    },
    [loginUser.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export default login.reducer;
