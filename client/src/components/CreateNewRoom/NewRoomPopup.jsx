import Popup from "../Popup/Popup";
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

export default function NewRoomPopup() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch()

  const onSubmit = ({roomName, roomDescription}) => {

  }

  return (
	  <>
		<Popup>
		  <form onSubmit={handleSubmit(onSubmit)}>
			<input type={'text'} placeholder={"room name"} {...register("roomName", {required: true})}/><br/>
			<textarea placeholder={"room description"} {...register("roomDescription", {required: true})}/><br/>
			{/*<div>{error && error.toString()}</div>*/}
			<button type="submit">create</button>
		  </form>
		</Popup>
	  </>
  )
}