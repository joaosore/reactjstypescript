import styled from 'styled-components';

// Bootstrap
import { Form } from 'react-bootstrap';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BForm = styled(Form)`
  width: 100%;

  .btn {
    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }
`;
