import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginSignupOption = styled.div`
    display: flex;
    align-items: center;
    height: 450px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
`

export const Title = styled.div`
    text-transform: uppercase;
    color: teal;
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: 20px;

`


export const Form = styled.form`
`

export const Input = styled.input`
    outline: none;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-radius: 9999px;
    text-indent: 15px;
    color: white;
    border: 1px solid white;
    background-color: teal;

::placeholder {
    color: white;
    opacity: 1;
}
`

export const Submit = styled.button`
    height: 40px;
    outline: none;
    border-radius: 9999px;
    width: 50%;
    padding: 0px 20px;
    color: white;
    border: 1px solid white;
    background-color: teal;
    text-transform: uppercase;
    cursor: pointer;
`