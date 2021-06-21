import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import popupReducer from "./popupReducer";


const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  popup: popupReducer,
});

export default rootReducer;