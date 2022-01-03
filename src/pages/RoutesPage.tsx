import React, { useState } from 'react';
import RoutesBlock from '../components/RoutesBlock/RoutesBlock';
import SecondBar from '../components/secondBar/SecondBar';
import Sidebar from '../components/sidebar/Sidebar';
import { Wrapper } from '../styles/Wrapper';

interface Props {}

const RoutesPage: React.FC = (props: Props) => {
  const [startCity, setStartCity] = useState('Cuenca');
  const [endCity, setEndCity] = useState('Quito');
  // startCity = startCity || '?';
  // endCity = endCity || '?';
  const currentRoute = `Your journey: from ${startCity} to ${endCity}`;
  return (
    <>
      <SecondBar title={currentRoute} />
      <Wrapper display='flex' padding='40px 0 0 0'>
        <Sidebar />
        <RoutesBlock />
      </Wrapper>
    </>
  );
};

export default RoutesPage;
