import styled, { css } from 'styled-components';

export const textBase = css`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const StyledBaseTitle = styled.div`
  ${textBase}
`;

export const StyledFilterWrapperUl = styled.ul`
  ${textBase};
  position: relative;
  box-shadow: '0 3px 5px 0 rgb(0 0 0 / 20%)';
  border: 1px solid rgb(204, 204, 204);
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 0.5rem;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: rgb(37, 33, 19);
  width: 100%;

  *:focus {
    outline: none;
  }

  div {
    margin-left: 4px;
  }
`;
