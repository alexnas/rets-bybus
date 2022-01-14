import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';

export const getSortedRoutesCollection = createSelector(
  [(state) => state && state.routes, (state) => state.sortParams],
  (routesCollection, sortParams) => {
    if (routesCollection.routes.length === 0) {
      return [];
    }
    if (sortParams) {
      return orderBy(routesCollection.routes, sortParams.sortParams.sortKey);
    }
    return routesCollection.routes;
  }
);
