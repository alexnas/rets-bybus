import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';

interface Props {}

const HomePage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar />
      <Container>
        <h1>Home Page</h1>
        <h1>~~~ GoByBus ~~~</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
          Asperiores, modi. +1-345-456-5656
        </p>
      </Container>
    </MainWrapper>
  );
};

export default HomePage;
