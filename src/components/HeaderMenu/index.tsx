import React from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  content?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export function HeaderMenu({ children, content }: Props) {
  return <Container justifyContent={content}>{children}</Container>;
}
