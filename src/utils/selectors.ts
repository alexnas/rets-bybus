import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import { IRoute } from '../types';

export const getSortedFilteredCollection = createSelector(
  [
    (state) => state && state.routes.routes,
    (state) => state.filterByCompany.filterByCompany,
    (state) => state.filterByStartCity.filterByStartCity,
    (state) => state.filterByEndCity.filterByEndCity,
    (state) => state.filterByStartTime,
    (state) => state.sortParams,
  ],
  (
    routes: IRoute[],
    filterByCompany,
    filterByStartCity,
    filterByEndCity,
    filterByStartTime,
    sortParams
  ) => {
    if (routes.length === 0) {
      return [];
    }

    const noCompanies = !Object.values(filterByCompany).some(
      (item) => item === true
    );
    const noStartCities = !Object.values(filterByStartCity).some(
      (item) => item === true
    );
    const noEndCities = !Object.values(filterByEndCity).some(
      (item) => item === true
    );

    let filteredRoutes = routes.filter(
      (route) =>
        (noCompanies || filterByCompany[route.company.name]) &&
        (noStartCities || filterByStartCity[route.start_city.city.name]) &&
        (noEndCities || filterByEndCity[route.end_city.city.name]) &&
        +route.start_time.split(':')[0] >= filterByStartTime.minCurrent &&
        +route.start_time.split(':')[0] < filterByStartTime.maxCurrent
    );

    if (sortParams) {
      return orderBy(filteredRoutes, sortParams.sortParams.sortKey);
    }

    return filteredRoutes;
  }
);
