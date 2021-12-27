import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';

const StyledSecondBar = styled.div`
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.secBg};
  color: ${({ theme }) => theme.colors.thirdLight};
`;

const SecondBar: React.FC = (props) => {
  return (
    <StyledSecondBar>
      <Container>
        <h3>Bus Companies ~~~ GoByBus ~~~</h3>
      </Container>
    </StyledSecondBar>
  );
};

export default SecondBar;
