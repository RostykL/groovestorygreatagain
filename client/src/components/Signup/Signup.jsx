import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Input,
  Form,
  Title,
  Submit,
} from '../../pages/Authenticate/authenticateStyled';
import { Wrapper } from './signupStyled';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { signupUser } from '../../features/slices/signup/actions/signupUser';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const signup = useSelector(state => state.signup);

  const onSubmit = data => {
    dispatch(signupUser(data));
  };

  return (
    <Wrapper>
      <Title>Sign up</Title>
      {signup.status}
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
        <Input
          placeholder={'email'}
          type={'email'}
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <Submit>
          {signup.status === 'loading' ? (
            <Loader type="ThreeDots" color="#00BFFF" height={15} width={15} />
          ) : (
            'Sign up'
          )}
        </Submit>
      </Form>
    </Wrapper>
  );
}
