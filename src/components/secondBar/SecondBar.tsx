import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { Container } from '../../styles/Container';
import { StyledFlex } from '../../styles/Flex';

interface ISecondBar {
  title: string;
}

const StyledSecondBar = styled.div`
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.secBg};
  color: ${({ theme }) => theme.colors.thirdLight};
`;

const SecondBar: React.FC<ISecondBar> = (props) => {
  const { startCity, endCity } = useAppSelector((state) => state.search);

  return (
    <StyledSecondBar>
      <Container>
        <StyledFlex>
          <h4>
            Your journey: from {startCity ? startCity : 'anywhere'} to{' '}
            {endCity ? endCity : 'anywhere'}
          </h4>
          <h4> ~~~ GoByBus ~~~ </h4>
        </StyledFlex>
      </Container>
    </StyledSecondBar>
  );
};

export default SecondBar;
