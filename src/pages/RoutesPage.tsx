import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';

interface Props {}

const RoutesPage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='Your journey: from Cuenca to ...' />
      <Container>
        <h4>Found routes table</h4>

        <p>Under Construction...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
          Asperiores, modi. +1-345-456-5656
        </p>
      </Container>
    </MainWrapper>
  );
};

export default RoutesPage;
