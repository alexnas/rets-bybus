import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { getRoutesAsync } from '../../store/slices/routesSlice';
import { StyledCardBody, StyledCardList } from '../../styles/StyledCard';
import TopRouteItem from './TopRoutesItem';

interface Props {}

const TopRoutesList: React.FC = (props: Props) => {
  const dispatch = useDispatch();
  const { routes, isLoading, error } = useAppSelector((state) => state.routes);

  useEffect(() => {
    dispatch(getRoutesAsync());
  }, [dispatch]);

  return (
    <StyledCardBody>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <StyledCardList>
        {routes.map((route) => (
          <TopRouteItem key={route.id} route={route} />
        ))}
      </StyledCardList>
    </StyledCardBody>
  );
};

export default TopRoutesList;
