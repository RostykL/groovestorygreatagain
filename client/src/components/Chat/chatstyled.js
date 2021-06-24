import styled from "styled-components"

export const ChatHeader = styled.div`
    background: white;
    padding: 10px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
	font-size: 13px;
`

export const ChatWrapper = styled.div`
    width: calc(100% - 350px);
    padding: 25px 50px;
	
`

export const ChatAreaWrapper = styled.div`
    height: calc(100vh - 168px);
	display: flex;
	align-items: center;
	margin-top: 25px;
	background: white;
`

export const ChatInput = styled.input`
	height: 30px;
	margin: 20px;
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 10px;
	text-indent: 10px;
	&:focus {
		 border: 1px solid rgba(0,0,0,0.3);
		 outline: none;
	 }
`

export const ChatArea = styled.div`
	flex: 1;
	background: aliceblue;
	border-top-left-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	
	span {
		border-radius: 5px;
		padding: 20px 30px;
		margin: 5px;
		background: white;
		align-items: flex-start;
		box-shadow: 0px 0px 6px rgba(0,0,0,0.3);
	}
`

export const ExactChat = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
`

export const AnotherUserInfo = styled.div`
	width: 0;
	display: none;
	height: 100%;
	background: aquamarine;
`