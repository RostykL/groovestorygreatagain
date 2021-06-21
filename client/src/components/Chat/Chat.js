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

import {motion} from 'framer-motion'
import Header from "../Header/Header";
import axios from "axios";
import {useParams} from 'react-router-dom';
import {io} from "socket.io-client";


export default function Chat() {
  const {roomName} = useParams()

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
			  {/*{messages &&*/}

			  {/*messages.map((el, i) => {*/}
				{/*// if(el.reload) {*/}
				{/*//   return (*/}
				{/*//   	<span key={i}>{el.text} <button onClick={handleChatReload}>yes</button></span>*/}
				{/*//   )*/}
				{/*// }*/}
				{/*return (*/}
				{/*	<motion.span*/}
				{/*		key={i}*/}
				{/*	>hi</motion.span>*/}
				{/*);*/}
			  {/*})}*/}
			</ChatArea>
			<ChatInput
				// onChange={e => setMsg(e.target.value)}
				// onKeyUp={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
				// value={msg}
			/>
		  </ExactChat>
		  <AnotherUserInfo>
			AnotherUserInfo
		  </AnotherUserInfo>
		</ChatAreaWrapper>
	  </ChatWrapper>
  );
}
