import axios from "axios";
import {logout_failed, logout_success} from "./login";

export const logoutUser = () => dispatch => {
  axios({
	method: "GET",
	url: "http://localhost:4444/logout",
  })
	  .then((res) => {
		dispatch(logout_success())
		localStorage.removeItem('authenticated')
	  })
	  .catch(e => {
		dispatch(logout_failed(e.message))
	  });
}