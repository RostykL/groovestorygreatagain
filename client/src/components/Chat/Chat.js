import React, {useState, useEffect} from 'react';
import {
  ChatAreaWrapper,
  ChatHeader,
  ChatWrapper,
  ChatArea,
  ChatInput,
  ExactChat,
  AnotherUserInfo
} from "./chatstyled";

import Header from "../Header/Header";
import {useParams} from 'react-router-dom';
import {motion} from "framer-motion";
import useRoom from "../../use/useRoom";
import useAddMessageToRoom from "../../use/addMessageToRoom";
import {io} from "socket.io-client";

let socket;
const ENDPOINT = "ws://localhost:4444";

export default function Chat() {
  const {roomName} = useParams()
  const [message, setMsg] = useState("")
  const {
	error,
	room,
	loading,
  } = useRoom(roomName)

  const {
	error : msgError,
	loading : msgLoading,
	setMessage
  } = useAddMessageToRoom(roomName);


  useEffect(() => {
	socket = io(ENDPOINT, {transports: ['websocket']});
	socket.on('connect', () => {
	 socket.on('chat message', ({message, id}) => {
	   setMessage(message + " " + id)
	 })
	});
	return () => {
	  socket.disconnect()
	}
  }, [ENDPOINT])

  useEffect(() => {
	socket.emit('join created room', roomName)
  }, [roomName])

  const handleMessaging = () => {
	socket.emit('chat message', {roomName, message})
  }




  return (
	  <ChatWrapper>
		<Header/>
		<ChatHeader>
		  <h1>Title</h1>
		  <h3>sub title</h3>
		</ChatHeader>
		<ChatAreaWrapper>
		  <ExactChat>
			<ChatArea>
			  {loading && "Loading"}
			  {!loading && <>
				{room.messages && room.messages.map((el, i) => {
				  return (
					  <motion.span key={i}>
						{el.text}
					  </motion.span>
				  );
				})}
			  </>
			  }
			</ChatArea>
			<ChatInput
				onChange={e => setMsg(e.target.value)}
				onKeyUp={(e) => e.key === 'Enter' ? handleMessaging() : null}
				value={message}
			/>
		  </ExactChat>
		  <AnotherUserInfo>
			AnotherUserInfo
		  </AnotherUserInfo>
		</ChatAreaWrapper>
	  </ChatWrapper>
  );
}
