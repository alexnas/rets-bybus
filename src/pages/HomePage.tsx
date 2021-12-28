import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';
import { PageTitleWrapper } from '../styles/PageTitleWrapper';

interface Props {}

const HomePage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='Home Page' />
      <Container>
        <h2>Bus tickets from Cuenca for everybody</h2>
        <h4>Check the bus schedule and pick up your your best tickets</h4>
        <PageTitleWrapper>
          <h3>Popular bus routes from Cuenca</h3>
        </PageTitleWrapper>

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

export default HomePage;
