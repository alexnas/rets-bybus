import styled, { css } from 'styled-components';

export const StyledBaseTitle = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const styledFilterWrapper = css`
  position: relative;
  box-shadow: '0 3px 5px 0 rgb(0 0 0 / 20%)';
  border: 1px solid rgb(204, 204, 204);
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const StyledFilterWrapper = styled.div`
  ${styledFilterWrapper};
`;

export const StyledFilterWrapperUl = styled.ul`
  ${styledFilterWrapper};
  padding: 10px;
  position: relative;
  box-shadow: '0 3px 5px 0 rgb(0 0 0 / 20%)';
  border: 1px solid rgb(204, 204, 204);
  background-color: white;
  border-radius: 5px;
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

interface IFilterLiProps {
  showFilterBox: boolean;
}

export const StyledFilterLi = styled.li<IFilterLiProps>`
  display: ${(props) => (!props.showFilterBox ? '' : 'none')};
  margin-top: ${(props) => (!props.showFilterBox ? '8px' : '0')};
  div:first-child {
    border-top: 1px solid transparent;
  }
  div:not(:first-child) {
    border-top: 1px solid rgb(209 213 219 / 60%);
  }
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    user-select: none;
    width: 100%;
    color: rgb(37, 33, 19);
    cursor: default;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
  }

  input:checked + label {
    color: teal;
    font-weight: 400;
  }

  label:before {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-right: 15px;
    height: 14px;
    width: 14px;
    background: #fff;
    border: 2px solid teal;
    color: teal;
    border-radius: 5px;
    content: '';
  }

  input:checked + label:before {
    content: '\u2713';
  }
`;
