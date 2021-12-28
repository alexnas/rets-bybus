import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import { Flex } from '../../styles/Flex';

interface ISecondBar {
  title: string;
}

const StyledSecondBar = styled.div`
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.secBg};
  color: ${({ theme }) => theme.colors.thirdLight};
`;

const SecondBar: React.FC<ISecondBar> = (props) => {
  return (
    <StyledSecondBar>
      <Container>
        <Flex>
          <h4>{props.title}</h4>
          <h4> ~~~ GoByBus ~~~ </h4>
        </Flex>
      </Container>
    </StyledSecondBar>
  );
};

export default SecondBar;
