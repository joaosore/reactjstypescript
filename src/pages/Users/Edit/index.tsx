import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useForm, SubmitHandler } from 'react-hook-form';

// Bootstrap
import { Button } from 'react-bootstrap';
import { FaUserEdit } from 'react-icons/fa';

// Plugins
import { Redirect, RouteComponentProps } from 'react-router';

// Components
import { Skeleton } from '../../../components/Skeleton';

// Styles
import { Container, BForm } from './styles';

// Services
import api from '../../../services/api';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

type Inputs = {
  name: string;
  password?: string;
};

export function UserEdit({ match }: Props) {
  const { id } = match.params;
  const [user, setUser] = useState<Inputs>();

  useEffect(() => {
    async function getUser() {
      const apiUser = await api.get(`/users/${id}`);
      setUser(apiUser.data);
    }

    getUser();
  }, []);

  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    console.log(data);
    try {
      await api.put(`/users/${id}`, data);
      toast(`Usuário alterado com sucesso!`);

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
        {user && (
          <BForm onSubmit={handleSubmit(onSubmit)}>
            <BForm.Group className="mb-3" controlId="BFormBasicName">
              <BForm.Label>Nome</BForm.Label>
              <BForm.Control
                type="text"
                defaultValue={user.name}
                {...register('name')}
              />
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicPassword">
              <BForm.Label>Nova senha</BForm.Label>
              <BForm.Control type="password" {...register('password')} />
            </BForm.Group>
            <Button variant="primary" type="submit">
              <FaUserEdit />
              Editar Usuário
            </Button>
          </BForm>
        )}
      </Container>
      {redirect && <Redirect to="/users" />}
    </Skeleton>
  );
}
