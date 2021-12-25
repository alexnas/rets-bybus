import { Header } from './components/header/Header';
import { Container } from './styles/Container';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>~~~ GoByBus ~~~</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
          Asperiores, modi. +1-345-456-5656
        </p>
      </Container>
    </div>
  );
};
