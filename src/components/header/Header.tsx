import React from 'react';
import styled from 'styled-components';

import { Container } from '../../styles/Container';
import { Logo } from './Logo';
import { HeaderNav } from './HeaderNav';
import { Flex } from '../../styles/Flex';

export const StyledHeader = styled.header`
  padding: 14px 0;
  color: ${({ theme }) => theme.colors.mainLight};
  background-color: ${({ theme }) => theme.colors.headerBg};

  li a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.mainLightHover};
    }
  }
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Logo />
          <HeaderNav />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
