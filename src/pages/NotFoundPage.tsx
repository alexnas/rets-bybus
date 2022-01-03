import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { Flex } from '../styles/Flex';
import { Wrapper } from '../styles/Wrapper';

interface Props {}

const NotFoundPage: React.FC = (props: Props) => {
  return (
    <>
      <SecondBar title='404 - Page not found...' />
      <Container>
        <Wrapper>
          <Flex direction='column'>
            <h2>~~~ Ooops... ~~~</h2>
            <h4>Try to choose the page in a right way.</h4>
          </Flex>{' '}
        </Wrapper>
      </Container>
    </>
  );
};

export default NotFoundPage;
