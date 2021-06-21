import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import popupReducer from "./popupReducer";
import roomsReducer from "./roomsReducer";


const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  popup: popupReducer,
  rooms: roomsReducer
});

export default rootReducer;