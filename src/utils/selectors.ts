import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import { IRoute } from '../types';

export const getSortedFilteredCollection = createSelector(
  [
    (state) => state && state.routes.routes,
    (state) => state.filterByCompany.filterByCompany,
    (state) => state.filterByStartCity.filterByStartCity,
    (state) => state.sortParams,
  ],
  (routes: IRoute[], filterByCompany, filterByStartCity, sortParams) => {
    if (routes.length === 0) {
      return [];
    }

    const noCompanies = !Object.values(filterByCompany).some(
      (item) => item === true
    );
    const noStartCities = !Object.values(filterByStartCity).some(
      (item) => item === true
    );

    let filteredRoutes = routes.filter(
      (route) =>
        (noCompanies || filterByCompany[route.company.name]) &&
        (noStartCities || filterByStartCity[route.start_city.city.name])
    );

    if (sortParams) {
      return orderBy(filteredRoutes, sortParams.sortParams.sortKey);
    }

    return filteredRoutes;
  }
);
