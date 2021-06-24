import styled, {createGlobalStyle} from "styled-components"

export const AppWrapper = styled.div`
	display: flex;
	background-color: teal;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, serif;
    }

    ::-webkit-scrollbar {
        width: 0; 
        background: transparent;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 !important;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;