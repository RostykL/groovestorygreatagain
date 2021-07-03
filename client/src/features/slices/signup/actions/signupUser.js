import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async ({ username, password }) => {
    return axios({
      method: 'post',
      data: {
        username,
        password,
      },
      url: '/register',
      withCredentials: true,
    }).then(res => {
      console.log(res);
      return res.data;
    });
  }
);
