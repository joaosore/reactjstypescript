import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useForm, SubmitHandler } from 'react-hook-form';

// Bootstrap
import { Button } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';

// Plugins
import { Redirect } from 'react-router';

// Components
import { Skeleton } from '../../../components/Skeleton';

// Styles
import { Container, BForm } from './styles';

// Services
import api from '../../../services/api';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export function UserCreate() {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await api.post(`/users`, data);
      toast(`Usuário criado com sucesso!`);

      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Skeleton>
      <Container>
        <BForm onSubmit={handleSubmit(onSubmit)}>
          <BForm.Group className="mb-3" controlId="BFormBasicName">
            <BForm.Label>Nome</BForm.Label>
            <BForm.Control type="text" {...register('name')} />
          </BForm.Group>
          <BForm.Group className="mb-3" controlId="BFormBasicEmail">
            <BForm.Label>E-mail</BForm.Label>
            <BForm.Control type="email" {...register('email')} />
          </BForm.Group>
          <BForm.Group className="mb-3" controlId="BFormBasicPassword">
            <BForm.Label>Senha de acesso</BForm.Label>
            <BForm.Control type="password" {...register('password')} />
          </BForm.Group>
          <Button variant="primary" type="submit">
            <FaUserPlus />
            Criar Usuário
          </Button>
        </BForm>
      </Container>
      {redirect && <Redirect to="/products" />}
    </Skeleton>
  );
}
