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
			  {/*{loading && "Loading"}*/}
			  {/*{!loading && <>*/}
				{/*{room.messages && room.messages.map((el, i) => {*/}
				{/*  return (*/}
				{/*	  <motion.span key={i}>*/}
				{/*		{el.text}*/}
				{/*	  </motion.span>*/}
				{/*  );*/}
				{/*})}*/}
			  {/*</>*/}
			  {/*}*/}
			</ChatArea>
			<ChatInput
				// onChange={e => setMsg(e.target.value)}
				// onKeyUp={(e) => e.key === 'Enter' ? handleMessaging() : null}
				// value={message}
			/>
		  </ExactChat>
		  <AnotherUserInfo>
			AnotherUserInfo
		  </AnotherUserInfo>
		</ChatAreaWrapper>
	  </ChatWrapper>
  );
}
