import styled from 'styled-components';

import { Container } from '../../styles/Container';
import { Logo } from './Logo';
import { HeaderNav } from './HeaderNav';
import { Flex } from '../../styles/Flex';

export const StyledHeader = styled.header`
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.headerBg};
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
