import Popup from "../Popup/Popup";
import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function NewRoomPopup() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = ({roomName, roomDescription}) => {
    const currUser = JSON.parse(localStorage.getItem('user')).name
    axios({
	  method: "POST",
	  data: {
		roomName,
		roomDescription,
		users: [currUser]
	  },
	  withCredentials: true,
	  url: "http://localhost:4444/newRoom",
	}).then(res => console.log(res))
  }

  return (
	  <>
		<Popup>
		  <form onSubmit={handleSubmit(onSubmit)}>
			<input type={'text'} placeholder={"room name"} {...register("roomName", {required: true})}/><br/>
			<textarea placeholder={"room description"} {...register("roomDescription", {required: true})}/><br/>
			<button type="submit">create</button>
		  </form>
		</Popup>
	  </>
  )
}