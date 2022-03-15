import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  width: calc(100% - 200px);
  height: calc(100% - 50px);
  position: relative;
  padding: 10px;

  overflow: scroll;

  /* box-shadow: 0px 4px 8px #00000054; */

  border: 1px solid #d4d4d4;
`;
