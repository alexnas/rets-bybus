import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { StyledCardBody, StyledCardList } from '../../styles/StyledCard';
import TopRouteItem from './TopRoutesItem';

interface Props {}

const TopRoutesList: React.FC = (props: Props) => {
  const { routes, isRoutesLoading, routesError } = useAppSelector(
    (state) => state.routes
  );

  return (
    <StyledCardBody>
      {isRoutesLoading && <h2>Loading...</h2>}
      {routesError && <h2>{routesError}</h2>}

      <StyledCardList>
        {routes.map((route) => (
          <TopRouteItem key={route.id} route={route} />
        ))}
      </StyledCardList>
    </StyledCardBody>
  );
};

export default TopRoutesList;
