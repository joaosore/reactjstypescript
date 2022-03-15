import React from 'react';

import { Container } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: Props) {
  return <Container {...rest} />;
}
