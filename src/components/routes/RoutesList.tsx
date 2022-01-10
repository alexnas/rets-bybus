import React from 'react';
import { useAppSelector } from '../../store/hooks';
import RouteItem from './RoutesItem';

interface Props {}

const RoutesList: React.FC = (props: Props) => {
  const { routes, isRoutesLoading, routesError } = useAppSelector(
    (state) => state.routes
  );

  return (
    <div>
      {isRoutesLoading && <h2>Loading...</h2>}
      {routesError && <h2>{routesError}</h2>}

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
