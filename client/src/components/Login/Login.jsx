import React, { useEffect } from 'react';
import { Wrapper } from './loginStyled';
import {
  Input,
  Form,
  Title,
  Submit,
} from '../../pages/Authenticate/authenticateStyled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { loginUser } from '../../features/slices/login/actions/loginUserAction';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector(state => state.login);

  const onSubmit = data => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (login.status === 'success' || localStorage.isAuthenticated) {
      localStorage.setItem('isAuthenticated', true);
      history.push('/');
    }
  }, [login.status]);

  return (
    <Wrapper>
      <Title>Login</Title>
      {login.status}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={'username'}
          type={'text'}
          {...register('username', { required: true })}
        />
        <Input
          placeholder={'password'}
          type={'password'}
          {...register('password', { required: true })}
        />
        <Submit>
          {login.status === 'loading' ? (
            <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} />
          ) : (
            'Login'
          )}
        </Submit>
      </Form>
    </Wrapper>
  );
}

export default Login;
