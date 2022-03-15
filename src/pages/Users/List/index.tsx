import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { FaUserEdit, FaUserLock } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Skeleton } from '../../../components/Skeleton';
import { H1 } from '../../../components/H1';

import { Container } from './styles';

import api from '../../../services/api';

import { HeaderMenu } from '../../../components/HeaderMenu';

interface UsersProps {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
}

export function UserList() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    async function getUser() {
      const apiUsers = await api.get(`/users`);
      setUsers(apiUsers.data);
    }

    getUser();
  }, []);

  const handleIsActive = async (id: string, status: boolean) => {
    try {
      await api.patch(`/users/active/${id}`, { is_active: !status });
      toast(`Usuário desativado!`);

      const apiUsers = await api.get(`/users`);
      setUsers(apiUsers.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Skeleton>
      <HeaderMenu content="space-between">
        <H1>Usuários</H1>
        <Button href="/users/add" variant="success">
          <IoMdAdd />
          Criar Usuário
        </Button>
      </HeaderMenu>
      <Container>
        <Table striped bordered>
          <thead>
            <tr>
              <th className="table50">Nome</th>
              <th className="table50">E-mail</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button href={`/users/${user.id}`} variant="success">
                    <FaUserEdit />
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    variant={user.is_active ? 'danger' : 'primary'}
                    onClick={() => handleIsActive(user.id, user.is_active)}
                  >
                    <FaUserLock />
                    {user.is_active ? 'Desativar' : 'Ativar'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Skeleton>
  );
}
