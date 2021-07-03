import { configureStore } from '@reduxjs/toolkit';
import rooms from './slices/rooms/rooms';
import popup from './slices/popup/popup';
import chatRoom from './slices/chatRoom/chatRoom';
import login from './slices/login/login';

export default configureStore({
  reducer: {
    rooms: rooms,
    toggle: popup,
    chatRoom: chatRoom,
    login: login,
  },
});
