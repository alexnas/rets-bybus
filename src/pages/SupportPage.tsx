import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';

interface Props {}

const SupportPage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='Customer Support' />
      <Container>
        <h2>Bus support</h2>
        <h4>We’ll help you get your bus</h4>

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

export default SupportPage;
