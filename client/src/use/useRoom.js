import axios from "axios";
import {useEffect, useState} from "react";

export default function useRoom(roomName) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [room, setRoom] = useState({})
  useEffect(() => {
	setLoading(true)
	axios({
	  method: "POST",
	  data: {
		roomName
	  },
	  withCredentials: true,
	  url: "http://localhost:4444/room",
	}).then(res => {
	  setRoom(res.data)
	  setLoading(false)
	}).catch(e => {
	  setError(e.toString())
	  setLoading(true)
	})
  }, [roomName])

  return {
    error,
	room,
	loading,
  }
}