import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { getRoutesAsync } from '../../store/slices/routesSlice';
import RouteItem from './RoutesItem';

interface Props {}

const RoutesList: React.FC = (props: Props) => {
  const dispatch = useDispatch();
  const { routes, isLoading, error } = useAppSelector((state) => state.routes);

  useEffect(() => {
    if (!routes.length) {
      dispatch(getRoutesAsync());
    }
  }, [dispatch, routes.length]);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <ul className=''>
        {routes &&
          routes.map((route) => {
            return (
              <li key={route.id}>
                <RouteItem route={route} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RoutesList;
