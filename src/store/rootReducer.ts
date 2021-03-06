import { combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/citiesSlice';
import { companiesReducer } from './slices/companiesSlice';
import { routesReducer } from './slices/routesSlice';
import { sortReducer } from './slices/sortSlice';
import { filterByCompanyReducer } from './slices/filterByCompanySlice';
import { filterByStartCityReducer } from './slices/filterByStartCitySlice';
import { filterByEndCityReducer } from './slices/filterByEndCitySlice';
import { filterByStartTimeReducer } from './slices/filterByStartTimeSlice';
import { filterByEndTimeReducer } from './slices/filterByEndTimeSlice';
import { searchReducer } from './slices/searchSlice';
import { filterByPriceReducer } from './slices/filterByPriceSlice';

const rootReducer = combineReducers({
  companies: companiesReducer,
  routes: routesReducer,
  cities: citiesReducer,
  sortParams: sortReducer,
  filterByCompany: filterByCompanyReducer,
  filterByStartCity: filterByStartCityReducer,
  filterByEndCity: filterByEndCityReducer,
  filterByStartTime: filterByStartTimeReducer,
  filterByEndTime: filterByEndTimeReducer,
  filterByPrice: filterByPriceReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
