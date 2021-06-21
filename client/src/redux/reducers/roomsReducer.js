const initialState = {
  rooms: [],
  loading: true,
  error: null
};

export const ADD_ROOM = "ADD_ROOM";

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
	case ADD_ROOM:
	  return {
	    ...state,
		rooms: [...state.rooms, action.payload]
	  }
	default:
	  return state;
  }
}