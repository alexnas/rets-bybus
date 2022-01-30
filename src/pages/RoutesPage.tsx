import React from 'react';
import RoutesBlock from '../components/RoutesBlock/RoutesBlock';
import SecondBar from '../components/secondBar/SecondBar';
import Sidebar from '../components/sidebar/Sidebar';
import { StyledWrapper } from '../styles/Wrapper';

interface Props {}

const RoutesPage: React.FC = (props: Props) => {
  const startCity = 'Cuenca';
  const endCity = 'Quito';

  return (
    <>
      <SecondBar title={`Your journey: from ${startCity} to ${endCity}`} />
      <StyledWrapper display='flex' padding='40px 0 0 0'>
        <Sidebar />
        <RoutesBlock />
      </StyledWrapper>
    </>
  );
};

export default RoutesPage;
