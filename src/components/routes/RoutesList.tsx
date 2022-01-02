import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { getRoutesAsync } from '../../store/slices/routesSlice';
import { StyledCardBody, StyledCardList } from '../../styles/Card';
import RouteItem from './RoutesItem';

interface Props {}

const RoutesList: React.FC = (props: Props) => {
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
          <RouteItem key={route.id} route={route} />
        ))}
      </StyledCardList>
    </StyledCardBody>
  );
};

export default RoutesList;
