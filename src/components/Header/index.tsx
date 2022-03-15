import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link to="/" />

      <DropdownButton
        id="dropdown-basic-button"
        title={
          <span>
            <MdSettings /> Configurações
          </span>
        }
        variant="outline-dark"
      >
        <Dropdown.Item href="/logout">Logout</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
}
