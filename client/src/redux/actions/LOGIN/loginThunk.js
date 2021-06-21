import axios from "axios";
import {login_failed, login_start, login_success} from "./login";
import {useHistory} from 'react-router-dom';

export const loginUser = ({username, password}) => dispatch => {
  dispatch(login_start())
  axios({
	method: "POST",
	data: {
	  username,
	  password,
	},
	withCredentials: true,
	url: "http://localhost:4444/login",
  })
	  .then((res) => {
	    console.log(res)
		dispatch(login_success(res.data))
	  })
	  .catch(e => {
		dispatch(login_failed(e.message))
	  });
}