import React from 'react';
import Card from '../components/Card';
import RoutesList from '../components/routes/RoutesList';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { Wrapper } from '../styles/Wrapper';

interface Props {}

const HomePage: React.FC = (props: Props) => {
  return (
    <>
      <SecondBar title='Home Page' />
      <Container>
        <Wrapper>
          <h2>Bus tickets from Cuenca for everybody</h2>
          <h4>Check the bus schedule and pick up your your best tickets</h4>

          <Card title='Top bus routes with Cuenca'>
            <RoutesList />
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomePage;
