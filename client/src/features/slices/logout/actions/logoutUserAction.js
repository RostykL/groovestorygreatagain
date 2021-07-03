import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logoutUser = createAsyncThunk(
  'logout/logoutUser',
  async (data, { dispatch }) => {
    return axios({
      method: 'get',
      url: '/logout',
      withCredentials: true,
    }).then(res => {
      return res.data;
    });
  }
);
