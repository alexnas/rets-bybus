import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { StyledWrapper } from '../styles/Wrapper';

interface Props {}

const HomePage: React.FC = (props: Props) => {
  return (
    <>
      <SecondBar title='About GoByBus Project' />
      <Container>
        <StyledWrapper>
          <h2>Welcome into the GoByBus project! </h2>
          <h4>We are here to help you to reach the right place in time...</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
            Asperiores, modi. +1-345-456-5656
          </p>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default HomePage;
