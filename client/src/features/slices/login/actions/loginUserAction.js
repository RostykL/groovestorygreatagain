import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }) => {
    return axios({
      method: 'post',
      data: {
        username,
        password,
      },
      url: '/login',
      withCredentials: true,
    }).then(res => res.data);
  }
);
