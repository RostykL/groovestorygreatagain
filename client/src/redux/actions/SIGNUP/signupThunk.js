import axios from "axios";
import {signup_failed, signup_start, signup_success} from "./signup";

export const signupUser = ({username, password}) => dispatch => {
  dispatch(signup_start())
  axios({
	method: "POST",
	data: {
	  username,
	  password,
	},
	withCredentials: true,
	url: "http://localhost:4444/register",
  })
	  .then((res) => {
	    console.log(res)
		dispatch(signup_success(res.data))
	  })
	  .catch(e => {
		dispatch(signup_failed(e.message))
	  });
}