import { configureStore } from '@reduxjs/toolkit'
import rooms from "./slices/rooms/rooms";
import popup from "./slices/popup/popup";
import chatRoom from "./slices/chatRoom/chatRoom";

export default configureStore({
  reducer: {
    rooms: rooms,
    toggle: popup,
    chatRoom: chatRoom,
  },
})