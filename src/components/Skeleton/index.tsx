import React from 'react';
import { Header } from '../Header';
import { Menu } from '../Menu';

import { Container, Content } from './styles';

interface Props {
  children?: React.ReactNode;
}

export function Skeleton({ children }: Props) {
  return (
    <Container>
      <Header />
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
}
