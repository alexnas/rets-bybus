import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import { IRoute } from '../types';

export const getSortedFilteredCollection = createSelector(
  [
    (state) => state && state.routes.routes,
    (state) => state.filterByCompany.filterByCompany,
    (state) => state.sortParams,
  ],
  (routes: IRoute[], filterByCompany, sortParams) => {
    if (routes.length === 0) {
      return [];
    }

    let filteredRoutes = routes.filter(
      (route) => filterByCompany[route.company.name]
    );

    if (filteredRoutes.length === 0) {
      filteredRoutes = routes;
    }

    if (sortParams) {
      return orderBy(filteredRoutes, sortParams.sortParams.sortKey);
    }

    return filteredRoutes;
  }
);
