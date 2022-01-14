import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { IRoute } from '../../types';
import { getSortedRoutesCollection } from '../../utils/selectors';
import RouteItem from './RoutesItem';

const RoutesList: React.FC = () => {
  const { isRoutesLoading, routesError } = useAppSelector(
    (state) => state.routes
  );

  const sortedRoutes: IRoute[] = useAppSelector((state) =>
    getSortedRoutesCollection(state)
  );

  const preparedRoutes = sortedRoutes;

  return (
    <div>
      {isRoutesLoading && <h2>Loading...</h2>}
      {routesError && <h2>{routesError}</h2>}

      <ul className=''>
        {preparedRoutes &&
          preparedRoutes.map((route) => {
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
