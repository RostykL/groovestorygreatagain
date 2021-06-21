import {ADD_ROOM, START_FETCHING, FETCHED_ROOMS, FETCHED_ERROR} from "../type";

const initialState = {
  list: [],
  loading: true,
  error: null,
  room: {},
};

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
	case START_FETCHING:
	  return {
	    ...state,
		loading: true,
	  }
	case FETCHED_ROOMS:
	  return {
		...state,
		list: action.payload,
		loading: false,
	  }
	case FETCHED_ERROR:
	  return {
		...state,
		error: action.payload.error,
		loading: !action.payload.continue,
	  }
	case ADD_ROOM:
	  return {
	    ...state,
		list: [...state.list, action.payload]
	  }
	default:
	  return state;
  }
}