import {TOGGLE} from "../type";

const initialState = {
  opened: false
}


export default function popupReducer(state = initialState, action) {
  switch(action.type) {
	case TOGGLE:
	  return {
	    ...state,
	    opened: !state.opened
	  }
	default:
	  return state;
  }
}