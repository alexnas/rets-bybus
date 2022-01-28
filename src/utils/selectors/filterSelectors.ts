import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { RootState } from '../../store/store';
import { IRoute } from '../../types';
import {
  MIN_SCALE_START_TIME,
  MIN_SCALE_END_TIME,
  MIN_SCALE_PRICE,
  MAX_SCALE_START_TIME,
  MAX_SCALE_END_TIME,
  MAX_SCALE_PRICE,
} from '../../constants/filterConstants';
import { START_TIME, END_TIME, PRICE } from '../../constants/sortConstants';

const routesSelector = (state: RootState) => state && state.routes.routes;

export const selectPriceLimits = createSelector(
  routesSelector,
  (routes: IRoute[]) => {
    let minScaleLimit: number = MIN_SCALE_PRICE;
    let maxScaleLimit: number = MAX_SCALE_PRICE;
    let isRoutesNotEmpty: boolean = routes.length > 0;

    if (isRoutesNotEmpty) {
      const sortedRoutes = orderBy(routes, PRICE);
      minScaleLimit = Math.floor(sortedRoutes[0][PRICE]);
      maxScaleLimit =
        Math.floor(sortedRoutes[sortedRoutes.length - 1][PRICE]) + 1;
    }

    return {
      isRoutesNotEmpty,
      minScaleLimit,
      maxScaleLimit,
    };
  }
);

export const selectStartTimeLimits = createSelector(
  routesSelector,
  (routes: IRoute[]) => {
    let minScaleLimit: number = MIN_SCALE_START_TIME;
    let maxScaleLimit: number = MAX_SCALE_START_TIME;
    let isRoutesNotEmpty: boolean = routes.length > 0;

    if (isRoutesNotEmpty) {
      const sortedRoutes = orderBy(routes, START_TIME);
      minScaleLimit = +sortedRoutes[0][START_TIME].split(':')[0];
      maxScaleLimit =
        +sortedRoutes[sortedRoutes.length - 1][START_TIME].split(':')[0] + 1;
    }

    return {
      isRoutesNotEmpty,
      minScaleLimit,
      maxScaleLimit,
    };
  }
);
export const selectEndTimeLimits = createSelector(
  routesSelector,
  (routes: IRoute[]) => {
    let minScaleLimit: number = MIN_SCALE_END_TIME;
    let maxScaleLimit: number = MAX_SCALE_END_TIME;
    let isRoutesNotEmpty: boolean = routes.length > 0;

    if (isRoutesNotEmpty) {
      const sortedRoutes = orderBy(routes, END_TIME);
      minScaleLimit = +sortedRoutes[0][END_TIME].split(':')[0];
      maxScaleLimit =
        +sortedRoutes[sortedRoutes.length - 1][END_TIME].split(':')[0] + 1;
    }

    return {
      isRoutesNotEmpty,
      minScaleLimit,
      maxScaleLimit,
    };
  }
);

export const getSortedFilteredCollection = createSelector(
  [
    (state: RootState) => state && state.routes.routes,
    (state: RootState) => state.filterByCompany.filterByCompany,
    (state: RootState) => state.filterByStartCity.filterByStartCity,
    (state: RootState) => state.filterByEndCity.filterByEndCity,
    (state: RootState) => state.filterByStartTime,
    (state: RootState) => state.filterByEndTime,
    (state: RootState) => state.filterByPrice,
    (state: RootState) => state.sortParams,
  ],
  (
    routes: IRoute[],
    filterByCompany,
    filterByStartCity,
    filterByEndCity,
    filterByStartTime,
    filterByEndTime,
    filterByPrice,
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
        (!filterByStartTime.minCurrent ||
          +route.start_time.split(':')[0] >= filterByStartTime.minCurrent) &&
        (!filterByStartTime.maxCurrent ||
          +route.start_time.split(':')[0] < filterByStartTime.maxCurrent) &&
        (!filterByEndTime.minCurrent ||
          +route.end_time.split(':')[0] >= filterByEndTime.minCurrent) &&
        (!filterByEndTime.maxCurrent ||
          +route.end_time.split(':')[0] < filterByEndTime.maxCurrent) &&
        (!filterByPrice.minCurrent ||
          +route.price >= filterByPrice.minCurrent) &&
        (!filterByPrice.maxCurrent || +route.price < filterByPrice.maxCurrent)
    );

    if (sortParams) {
      return orderBy(filteredRoutes, sortParams.sortParams.sortKey);
    }

    return filteredRoutes;
  }
);

export const selectFoundFilteredRoutesCount = createSelector(
  [routesSelector, getSortedFilteredCollection],
  (routes, filteredRoutes) => {
    const foundCount = routes.length;
    const filteredCount = filteredRoutes.length;

    return { foundCount, filteredCount };
  }
);
