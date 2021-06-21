import axios from "axios";
import {useEffect, useState} from "react";

export default function useAddMessageToRoom(roomName) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [msg, setMsg] = useState("")
  const setMessage = (m) => {
	setMsg(m)
  }
  const saveMsg = () => {
    console.log(msg, roomName)
	if(msg.length > 0) {
	  setLoading(true)
	  axios({
		method: "PUT",
		data: {
		  roomName,
		  message: {
			text: msg
		  }
		},
		withCredentials: true,
		url: "http://localhost:4444/add_message",
	  }).then(res => {
		console.log(res, 'res')
		setLoading(false)
	  }).catch(e => {
		setError(e.toString())
		console.log(e, 'e')
		setLoading(true)
	  })
	}
  }
  useEffect(saveMsg, [msg])

  return {
	error,
	loading,
	setMessage
  }
}