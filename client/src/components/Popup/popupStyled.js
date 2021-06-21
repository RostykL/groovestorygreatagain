import styled from 'styled-components';
import {motion} from "framer-motion"


export const PopupWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
	display: ${({hide}) => hide ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
`

export const PopupWindow = styled(motion.div)`
    width: ${({width}) => width ? width + 'px' : '0px'};
    height: ${({height}) => height ? height + 'px' : '0px'};
	background-color: white;
	border-radius: 5px;
	padding: 10px;
`