import {IS_LOGGEDD, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILED} from "../type";

const initialState = {
  status: null,
  processing: false,
  isAuthenticated: false,
  error: null
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
	case LOGIN_SUCCESS:
	  return {
		...state,
		status: action.payload,
		isAuthenticated: true,
		processing: false,
		error: null
	  }
	case LOGIN_START:
	  return {
		...state,
		processing: true
	  }
	case LOGIN_FAILED:
	  return {
		...state,
		processing: false,
		error: action.payload
	  }
	case LOGOUT:
	  return {
		...state,
		isAuthenticated: false,
		isLogged: false,
	  }
	case LOGOUT_FAILED:
	  return {
		...state,
		error: action.payload
	  }

	case IS_LOGGEDD:
	  return {
	    ...state,
		isAuthenticated: true
	  }
	default:
	  return state
  }
}