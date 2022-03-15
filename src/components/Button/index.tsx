import React from 'react';

import { Container } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: Props) {
  return <Container {...rest} />;
}
