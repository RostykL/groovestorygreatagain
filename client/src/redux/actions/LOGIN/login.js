import {LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "../../type";

export const login_success = (status) => ({type: LOGIN_SUCCESS, payload: status});
export const login_start = () => ({type: LOGIN_START});
export const login_failed = (error) => ({type: LOGIN_FAILED, payload: error});

export const logout_success = () => ({type: LOGOUT});
export const logout_failed = (error) => ({type: LOGOUT, payload: error});
