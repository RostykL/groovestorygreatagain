import React, { useState, useEffect, useContext } from 'react';
import {
  ChatAreaWrapper,
  ChatHeader,
  ChatWrapper,
  ChatArea,
  ChatInput,
  ExactChat,
  AnotherUserInfo,
} from './chatstyled';

import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoom } from '../../features/slices/chatRoom/actions/getRoom';
import { motion } from 'framer-motion';
import Loader from 'react-loader-spinner';
import { addMessage } from '../../features/slices/chatRoom/chatRoom';
import SocketContext from '../../helpers/ws/socket';

export default function Chat() {
  const chatRoom = useSelector(state => state.chatRoom);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');

  const { roomName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // socket.on('connect', () => {
    socket.on('message', message => {
      dispatch(addMessage(message));
    });
    // });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    socket.emit('join', roomName);
    dispatch(getRoom(roomName));
  }, [roomName]);

  const handleMessaging = () => {
    if (message) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <ChatWrapper>
      <Header />
      <ChatHeader>
        <h1>Title</h1>
        <h3>sub title</h3>
      </ChatHeader>
      <ChatAreaWrapper>
        <ExactChat>
          <ChatArea>
            {chatRoom.status === 'loading' && (
              <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />
            )}
            {chatRoom.status === 'success' && (
              <>
                {chatRoom.room.messages &&
                  chatRoom.room.messages.map((el, i) => {
                    return <motion.span key={i}>{el.text}</motion.span>;
                  })}
              </>
            )}
          </ChatArea>
          <ChatInput
            onChange={e => setMessage(e.target.value)}
            onKeyUp={e => (e.key === 'Enter' ? handleMessaging() : null)}
            value={message}
          />
        </ExactChat>
        <AnotherUserInfo>AnotherUserInfo</AnotherUserInfo>
      </ChatAreaWrapper>
    </ChatWrapper>
  );
}
