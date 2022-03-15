import styled from 'styled-components';

export const Container = styled.div`
  /* box-shadow: 0px 4px 8px #00000054; */
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  min-height: 50px;
  padding: 14px 10px;
  width: 100%;

  .btn {
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      padding-right: 2px;

      svg {
        margin-right: 6px;
      }
    }
  }
`;
