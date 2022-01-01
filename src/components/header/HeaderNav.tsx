import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';
import { StyledLink } from '../../styles/StyledLink';

export const StyledHeaderNav = styled.nav`
  align-items: center;
  display: flex;

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
        <Flex>
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
        </Flex>
      </ul>
    </StyledHeaderNav>
  );
};
