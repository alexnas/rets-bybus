import React from 'react';
import Card from '../components/Card';
import RoutesList from '../components/routes/RoutesList';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';

interface Props {}

const HomePage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='Home Page' />
      <Container>
        <h2>Bus tickets from Cuenca for everybody</h2>
        <h4>Check the bus schedule and pick up your your best tickets</h4>

        <Card title='Top bus routes with Cuenca'>
          <RoutesList />
        </Card>
      </Container>
    </MainWrapper>
  );
};

export default HomePage;
