import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../../components/Button';

import { Container, Form, Input } from './styles';

import api from '../../../services/api';

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const [redirect, setRedirect] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const login = await api.post(`/auth/session`, data);
      const { token, refresh_token } = login.data;

      localStorage.setItem('token', token);
      localStorage.setItem('refresh_token', refresh_token);

      setRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setRedirect(true);
    }
  }, []);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} placeholder="Email" />
          <Input
            {...register('password')}
            type="password"
            placeholder="Senha"
          />
          {errors.password && <span>This field is required</span>}
          <Button type="submit">Login</Button>
        </Form>
      </Container>
      {redirect && <Redirect to="/" />}
    </>
  );
}
