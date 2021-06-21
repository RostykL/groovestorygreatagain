import styled from "styled-components";

import {motion} from "framer-motion"


export const LeftSideBar = styled.div`
    width: 400px;
    background: white;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
	height: 100vh;
`

export const Button = styled(motion.button)`
    color: teal;
    padding: 30px 20px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid teal;
    border-radius: 10px;
    background-color: transparent;

&
:hover {
    color: rgba(2, 128, 128, 0.8);
    border: 2px solid rgba(2, 128, 128, 0.8);

}
`

export const RoomsList = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	border-bottom: 1px dashed teal;
`


