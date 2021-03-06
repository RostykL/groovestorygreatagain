import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/loginUserAction';

const initialState = {
  status: null,
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeStatus(state) {
      state.status = null;
    },
  },
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

export const { changeStatus } = login.actions;

export default login.reducer;
