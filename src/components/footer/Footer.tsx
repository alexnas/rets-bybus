import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import { StyledFlex } from '../../styles/Flex';
import { HeaderNav } from '../header/HeaderNav';
import Copyright from './Copyright';
import Social from './Social';

const StyledFooter = styled.footer`
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.secBg};
  color: ${({ theme }) => theme.colors.thirdLight};
  font-size: 0.95rem;

  li a {
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.mainLightHover};
    }
  }
`;

const Footer: React.FC = (props) => {
  return (
    <StyledFooter>
      <Container>
        <StyledFlex>
          <HeaderNav />
          <StyledFlex justify='end'>
            <Social />
            <Copyright />
          </StyledFlex>
        </StyledFlex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
