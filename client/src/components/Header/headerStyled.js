import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 94, 94, 0.5);
    color: white;
    box-sizing: border-box;
`

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    list-style: none;
    width: 100%;
    font-size: 13px;
    text-transform: uppercase;
`

export const Li = styled.li`
    color: white;
    margin: 0 10px;
	
	a {
		text-decoration: none;
		color: white;
	}
	
	a:hover {
		text-decoration: underline;
	}
`