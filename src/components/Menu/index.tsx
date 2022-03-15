import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineProfile, AiOutlineStar } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Container, LinkMenu, Icon } from './styles';

export function Menu() {
  return (
    <Container>
      <LinkMenu href="/">
        <Icon>
          <MdDashboard />
        </Icon>
        Dashboard
      </LinkMenu>
      <LinkMenu href="/products">
        <Icon>
          <AiOutlineProfile />
        </Icon>
        Produtos
      </LinkMenu>
      <LinkMenu href="/affiliates-and-messengers">
        <Icon>
          <AiOutlineStar />
        </Icon>
        Afiliados e Mensageiros
      </LinkMenu>
      <LinkMenu href="/users">
        <Icon>
          <FiUsers />
        </Icon>
        Usuários
      </LinkMenu>
    </Container>
  );
}
