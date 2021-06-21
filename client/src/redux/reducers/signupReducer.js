import {SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS} from "../type";

const initialState = {
  status: null,
  processing: false,
  error: null
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
	case SIGNUP_SUCCESS:
	  return {
		...state,
		status: action.payload,
		processing: false,
		error: null
	  }
	case SIGNUP_START:
	  return {
		...state,
		processing: true
	  }
	case SIGNUP_FAILED:
	  return {
		...state,
		processing: false,
		error: action.payload
	  }
	default:
	  return state
  }
}