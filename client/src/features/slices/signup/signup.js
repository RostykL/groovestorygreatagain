import { createSlice } from '@reduxjs/toolkit';
import { signupUser } from './actions/signupUser';

const initialState = {
  status: null,
};

const signup = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.pending]: state => {
      state.status = 'loading';
    },
    [signupUser.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [signupUser.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export default signup.reducer;
