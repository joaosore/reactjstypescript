import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #0f247b;
`;

export const Form = styled.form`
  background-color: #fff;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  padding: 15px;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ccc;
`;
