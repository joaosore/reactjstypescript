import styled from 'styled-components';

interface Props {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'end'};
  padding: 0 10px;

  .btn {
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`;
