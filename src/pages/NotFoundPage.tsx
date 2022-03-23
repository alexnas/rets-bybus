import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { StyledFlex } from '../styles/Flex';
import { StyledWrapper } from '../styles/Wrapper';

interface Props {}

const NotFoundPage: React.FC = (props: Props) => {
  return (
    <>
      <SecondBar title='404 - Page not found...' />
      <Container>
        <StyledWrapper>
          <StyledFlex direction='column'>
            <h2>~~~ Ooops... ~~~</h2>
            <h4>Try to choose the page in a right way.</h4>
          </StyledFlex>{' '}
        </StyledWrapper>
      </Container>
    </>
  );
};

export default NotFoundPage;
