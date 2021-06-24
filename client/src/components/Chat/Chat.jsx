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
import {useDispatch, useSelector} from "react-redux";
import {getRoom} from "../../features/slices/chatRoom/actions/getRoom";
import {motion} from "framer-motion";
import Loader from "react-loader-spinner";
import {addMessageToDb} from "../../features/slices/chatRoom/actions/addMessageToDb";
import {socket} from "../../helpers/ws/socket";
import {addMessage} from "../../features/slices/chatRoom/chatRoom";


export default function Chat() {
  const chatRoom = useSelector(state => state.chatRoom)
  const [message, setMessage] = useState("")

  const {roomName} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
	if (roomName) {
	  socket.emit('join room', roomName)
	  dispatch(getRoom(roomName))
	}
  }, [roomName])

  useEffect(() => {
	socket.on('connect', () => {
	  socket.on('chat message', (res) => {
		console.log(res, 'res')
		// dispatch(addMessageToDb({roomName, text: res.message}))
		dispatch(addMessage({_id: res.id, text: res.message}))
	  })
	})
	return () => {
	  socket.disconnect();
	}
  }, [])

  const handleMessaging = () => {
	dispatch(addMessageToDb({roomName, text: message}))
	socket.emit('chat message', {roomName, message})
	setMessage("")
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
			  {chatRoom.status === 'loading' && <Loader type="ThreeDots" color="#00BFFF" height={30} width={30}/>}
			  {chatRoom.status === 'success' && <>
				{chatRoom.room.messages && chatRoom.room.messages.map((el, i) => {
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
				onChange={e => setMessage(e.target.value)}
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
