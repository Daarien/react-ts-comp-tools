import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${({ theme }) => theme.mainColor};
  padding: 7px 15px;
  border-radius: 3px;
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.activeColor};
  }
`;
