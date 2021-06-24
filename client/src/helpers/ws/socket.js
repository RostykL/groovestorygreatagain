import io from 'socket.io-client'
const ENDPOINT = "ws://localhost:4444";

const socket = io(ENDPOINT, {transports: ['websocket']});

export { socket }