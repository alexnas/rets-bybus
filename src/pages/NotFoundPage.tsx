import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { Flex } from '../styles/Flex';
import { MainWrapper } from '../styles/MainWrapper';

interface Props {}

const NotFoundPage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='404 - Page not found...' />
      <Container>
        <Flex direction='column'>
          <h2>~~~ Ooops... ~~~</h2>
          <h4>Try to choose the page in a right way.</h4>
        </Flex>
      </Container>
    </MainWrapper>
  );
};

export default NotFoundPage;
