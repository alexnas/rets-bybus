import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { IRoute } from '../../types';
import { getSortedFilteredCollection } from '../../utils/selectors/filterSelectors';
import RouteItem from './RoutesItem';

const RoutesList: React.FC = () => {
  const { isRoutesLoading, routesError } = useAppSelector(
    (state) => state.routes
  );

  const sortedFilteredRoutes: IRoute[] = useAppSelector((state) =>
    getSortedFilteredCollection(state)
  );

  const isEmptyRoutesList = sortedFilteredRoutes.length === 0;

  return (
    <div>
      {isRoutesLoading && <h2>Loading...</h2>}
      {routesError && <h2>{routesError}</h2>}
      {isEmptyRoutesList && (
        <>
          <h2> The list is empty. </h2>
          <h4>Change your search or filter and try again.</h4>
        </>
      )}

      <ul>
        {sortedFilteredRoutes &&
          sortedFilteredRoutes.map((route) => {
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
