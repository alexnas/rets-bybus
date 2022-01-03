import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { Wrapper } from '../styles/Wrapper';

interface Props {}

const SupportPage: React.FC = (props: Props) => {
  return (
    <>
      <SecondBar title='Customer Support' />
      <Container>
        <Wrapper>
          <h2>Bus support</h2>
          <h4>We’ll help you get your bus</h4>

          <p>Under Construction...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
            Asperiores, modi. +1-345-456-5656
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default SupportPage;
