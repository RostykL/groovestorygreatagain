import {SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS} from "../../type";

export const signup_success = (status) => ({type: SIGNUP_SUCCESS, payload: status})
export const signup_start = () => ({type: SIGNUP_START})
export const signup_failed = (error) => ({type: SIGNUP_FAILED, payload: error})