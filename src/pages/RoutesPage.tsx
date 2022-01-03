import React, { useState } from 'react';
import RoutesBlock from '../components/RoutesBlock/RoutesBlock';
import SecondBar from '../components/secondBar/SecondBar';
import Sidebar from '../components/sidebar/Sidebar';
import { Flex } from '../styles/Flex';
import { MainWrapper } from '../styles/MainWrapper';

interface Props {}

const RoutesPage: React.FC = (props: Props) => {
  const [startCity, setStartCity] = useState('Cuenca');
  const [endCity, setEndCity] = useState('Quito');
  // startCity = startCity || '?';
  // endCity = endCity || '?';
  const currentRoute = `Your journey: from ${startCity} to ${endCity}`;
  return (
    <>
      <MainWrapper>
        <SecondBar title={currentRoute} />
        <Flex>
          <Sidebar />
          <RoutesBlock />
        </Flex>
      </MainWrapper>
    </>
  );
};

export default RoutesPage;
