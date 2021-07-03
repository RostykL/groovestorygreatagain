import { configureStore } from '@reduxjs/toolkit';
import rooms from './slices/rooms/rooms';
import popup from './slices/popup/popup';
import chatRoom from './slices/chatRoom/chatRoom';
import login from './slices/login/login';
import logout from './slices/logout/logout';
import signup from './slices/signup/signup';

export default configureStore({
  reducer: {
    rooms,
    toggle: popup,
    chatRoom,
    login,
    logout,
    signup,
  },
});
