import React from 'react';
import styled from 'styled-components';
import { StyledFlex } from '../../styles/Flex';
import { StyledLink } from '../../styles/StyledLink';

export const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  li {
    margin-left: 10px;
  }
  li > a {
    color: inherit;

    &:hover {
      color: inherit;
    }
  }
`;

export const HeaderNav: React.FC = () => {
  return (
    <StyledHeaderNav>
      <ul>
        <StyledFlex>
          <li>
            <StyledLink to='/'>Home</StyledLink>
          </li>
          <li>
            <StyledLink to='companies'>Companies</StyledLink>
          </li>
          <li>
            <StyledLink to='routes'>Routes</StyledLink>
          </li>
          <li>
            <StyledLink to='support'>Support</StyledLink>
          </li>
          <li>
            <StyledLink to='about'>About</StyledLink>
          </li>
        </StyledFlex>
      </ul>
    </StyledHeaderNav>
  );
};
