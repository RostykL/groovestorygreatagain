import Popup from "../Popup/Popup";
import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {add_room, rooms_failed} from "../../redux/actions/ROOMS/rooms";
import {toggle_popup} from "../../redux/actions/POPUP/togglePopup";

export default function NewRoomPopup() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch()
  const error = useSelector(state => state.rooms).error

  const onSubmit = ({roomName, roomDescription}) => {
	const currUser = JSON.parse(localStorage.getItem('user')).name
	const newRoom = {
	  roomName,
	  roomDescription,
	  users: [currUser]
	}
	axios({
	  method: "POST",
	  data: newRoom,
	  withCredentials: true,
	  url: "http://localhost:4444/newRoom",
	}).then(res => {
	  console.log(res)
	  dispatch(add_room(res.data))
	  dispatch(toggle_popup());
	}).catch(e => {
	  dispatch(rooms_failed("Така кімната вже створена, якщо ні. Зверніться в підтримку або створіть іншу", true))
	})
  }

  return (
	  <>
		<Popup>
		  <form onSubmit={handleSubmit(onSubmit)}>
			<input type={'text'} placeholder={"room name"} {...register("roomName", {required: true})}/><br/>
			<textarea placeholder={"room description"} {...register("roomDescription", {required: true})}/><br/>
			<div>{error && error.toString()}</div>
			<button type="submit">create</button>
		  </form>
		</Popup>
	  </>
  )
}