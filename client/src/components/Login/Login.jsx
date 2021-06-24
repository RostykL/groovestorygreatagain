import React from "react";
import {Wrapper} from "./loginStyled";
import {Input, Form, Title, Submit} from '../../pages/Authenticate/authenticateStyled'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import Loader from "react-loader-spinner";



function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch()
  const history = useHistory();

  const onSubmit = data => {
  }

  return (
	  <Wrapper>
		<Title>Login</Title>
		{/*{status}*/}
		<Form onSubmit={handleSubmit(onSubmit)}>
		  <Input placeholder={"username"} type={"text"} {...register("username", {required: true})}/>
		  <Input placeholder={"password"} type={'password'} {...register("password", {required: true})}/>
		  <Submit>
			{/*{processing ? <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} /> : "Login"}*/}
		  </Submit>

		</Form>
	  </Wrapper>
  );
}

export default  Login;