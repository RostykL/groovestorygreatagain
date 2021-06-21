import {ADD_ROOM, START_FETCHING, FETCHED_ROOMS, FETCHED_ERROR} from "../../type";

export const rooms_fetched = (status) => ({type: FETCHED_ROOMS, payload: status});
export const rooms_start = () => ({type: START_FETCHING});
export const rooms_failed = (error, continueProcess) => ({type: FETCHED_ERROR, payload: {error, continue: continueProcess}});
export const add_room = (data) => ({type: ADD_ROOM, payload: data});
