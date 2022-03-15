import styled from 'styled-components';

export const Container = styled.div`
  /* box-shadow: 1px 6px 8px #00000054; */
  background-color: #fff;
  border-top: 1px solid #d4d4d4;
  height: calc(100% - 50px);
  width: 200px;
`;

export const LinkMenu = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  color: #000;
  cursor: pointer;
  font-size: 20px;
  min-height: 50px;
  padding: 14px 10px;
  text-decoration: none;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: #d4d4d4;
    color: #000;
    text-decoration: none;
  }
  s
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
