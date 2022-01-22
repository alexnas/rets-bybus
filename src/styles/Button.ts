import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 144px;
  height: 48px;
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.headerBg};
  padding: 0;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;
