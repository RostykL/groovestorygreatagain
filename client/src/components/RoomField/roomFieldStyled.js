import styled from 'styled-components';

export const Wrapper = styled.div`
	color: lightblue;
	border: 2px solid cornflowerblue;
	margin: 10px 0;
    padding: 15px 10px;
    border-radius: 10px;
	max-height: 100px;

`

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.div`
	color: black;
	letter-spacing: 1px;
	font-weight: bold;
	text-transform: uppercase;
`

export const QtyLeft = styled.div`
	color: ${({leftSpace}) => leftSpace ? 'lightgreen' : 'red' };
`


export const Description = styled.div`
	color: black;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
	font-size: 13px;
    white-space: nowrap;
	color: rgba(0,0,0,0.4)
`
