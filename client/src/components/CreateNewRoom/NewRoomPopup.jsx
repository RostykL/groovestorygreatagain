import Popup from "../Popup/Popup";
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addRoomToBd} from "../../features/slices/rooms/actions/addRoom";


export default function NewRoomPopup() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch()
  const room = useSelector(state => state.rooms)

  const onSubmit = (newRoom) => dispatch(addRoomToBd(newRoom))

  return (
	  <>
		<Popup>
		  <form onSubmit={handleSubmit(onSubmit)}>
			<input type={'text'} placeholder={"room name"} {...register("roomName", {required: true})}/><br/>
			<input type={'number'} placeholder={"quantity"} {...register("quantity", {required: true})}/><br/>
			<textarea placeholder={"room description"} {...register("roomDescription", {required: true})}/><br/>
			{room.status === 'failed adding new room' ? 'something went wrong' : null}
			<button type="submit">create</button>
		  </form>
		</Popup>
	  </>
  )
}